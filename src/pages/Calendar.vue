<template>
  <div class="container-fluid py-4">
    <div class="row">
      <!-- Left Sidebar -->
      <div class="col-md-3">
        <!-- Friends List -->
        <div class="card mb-3">
          <div class="card-header">
            <h5 class="mb-0">Friends</h5>
          </div>
          <div class="card-body">
            <div v-if="loadingFriends" class="text-center py-3">
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div v-else-if="friends.length === 0" class="text-center text-muted py-3">
              No friends yet
            </div>
            <div v-else class="list-group list-group-flush">
              <button
                v-for="friend in friends"
                :key="friend.id"
                type="button"
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                :class="{ active: friend.selected }"
                @click="toggleFriend(friend.id)"
              >
                {{ friend.name }}
                <span v-if="friend.selected" class="badge bg-success">✓</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Saved Activities -->
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Saved Activities</h5>
            <button class="btn btn-sm btn-success" @click="loadFavourites" :disabled="isLoadingActivities">
              <span v-if="isLoadingActivities">Loading...</span>
              <span v-else>Refresh</span>
            </button>
          </div>
          <div class="card-body activities-scrollable">
            <div v-if="isLoadingActivities" class="text-center py-3">
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div v-else-if="activities.length === 0" class="text-center text-muted py-3">
              No saved activities
            </div>
            <div v-else class="list-group list-group-flush">
              <div
                v-for="activity in activities"
                :key="activity.id"
                class="list-group-item"
              >
                <strong>{{ activity.title }}</strong>
                <small class="d-block text-muted">{{ activity.location }}</small>
                <small class="d-block text-muted mt-1">📅 {{ activity.date }}</small>
                <small class="d-block mt-1">
                  <span class="badge bg-info">{{ activity.category }}</span>
                  <span v-if="activity.badge" class="badge bg-warning ms-1">{{ activity.badge }}</span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Calendar -->
      <div class="col-md-9">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Availability Calendar</h5>
            <button class="btn btn-success" @click="showAvailabilityModal = true">
              Select Your Availability
            </button>
          </div>
          <div class="card-body position-relative">
            <div ref="calendar"></div>
            <div
              v-if="hoveredEvent"
              class="custom-tooltip"
              :style="{ top: tooltipPos.top + 'px', left: tooltipPos.left + 'px' }"
              @mouseenter="keepHoveredEvent"
              @mouseleave="clearHoveredEvent"
            >
              <div class="tooltip-image">
                <img :src="hoveredEvent.extendedProps.image" :alt="hoveredEvent.title" />
              </div>
              <div class="tooltip-content">
                <strong>{{ hoveredEvent.title }}</strong>
                <div>Time: {{ hoveredEvent.extendedProps.time }}</div>
                <div>Location: {{ hoveredEvent.extendedProps.location }}</div>
                <div>Price: {{ hoveredEvent.extendedProps.price }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Availability Modal -->
    <div
      class="modal"
      :class="{ show: showAvailabilityModal }"
      :style="{ display: showAvailabilityModal ? 'block' : 'none' }"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Select Your Availability</h5>
            <button type="button" class="btn-close" @click="showAvailabilityModal = false"></button>
          </div>
          <div class="modal-body">
            <p>Click on dates to toggle your availability (green = available)</p>
            <div ref="availabilityCalendar" class="availability-calendar-container"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-secondary" @click="showAvailabilityModal = false">Close</button>
            <button type="button" class="btn-success" @click="saveAvailability">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showAvailabilityModal" class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { auth, db } from "../firebase.js";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default {
  name: "CalendarComponent",
  data() {
    return {
      calendar: null,
      availabilityCalendar: null,
      showAvailabilityModal: false,
      userAvailabilities: [],
      friends: [],
      activities: [],
      isLoadingActivities: false,
      loadingFriends: false,
      currentUser: null,
      unsubscribeFriends: [],
      hoveredEvent: null,
      tooltipPos: { top: 0, left: 0 },
      isMouseOverPopup: false,
      isMouseOverEvent: false,
    };
  },
  async mounted() {
    this.initCalendar();

    onAuthStateChanged(auth, async (user) => {
      this.currentUser = user;
      if (user) {
        await this.loadUserAvailability();
        await this.loadFriends();
        await this.loadFavourites();
      } else {
        this.friends = [];
        this.activities = [];
      }
    });
  },
  beforeUnmount() {
    this.unsubscribeFriends.forEach((unsub) => unsub());
  },
  watch: {
    showAvailabilityModal(newVal) {
      if (newVal) this.initAvailabilityCalendar();
    },
  },
  methods: {
    async loadUserAvailability() {
      if (!this.currentUser) return;
      try {
        const userDoc = await getDoc(doc(db, "users", this.currentUser.uid));
        if (userDoc.exists()) {
          this.userAvailabilities = userDoc.data().availableDates || [];
        }
      } catch (err) {
        console.error("Error loading user availability:", err);
      }
    },

    async loadFriends() {
      if (!this.currentUser) return;
      this.loadingFriends = true;
      try {
        const userDoc = await getDoc(doc(db, "users", this.currentUser.uid));
        if (!userDoc.exists()) return;
        const friendsListUIDs = userDoc.data().friendsList || [];

        this.friends = [
          {
            id: this.currentUser.uid,
            name: "Me",
            selected: false,
            availabilities: this.userAvailabilities,
          },
        ];

        this.unsubscribeFriends.forEach((unsub) => unsub());
        this.unsubscribeFriends = [];

        for (const uid of friendsListUIDs) {
          const friendDoc = await getDoc(doc(db, "users", uid));
          if (friendDoc.exists()) {
            const friendData = {
              id: uid,
              name: friendDoc.data().displayName || "Unknown",
              selected: false,
              availabilities: friendDoc.data().availableDates || [],
            };
            this.friends.push(friendData);

            const unsubscribe = onSnapshot(doc(db, "users", uid), (docSnap) => {
              if (docSnap.exists()) {
                const friend = this.friends.find((f) => f.id === uid);
                if (friend) {
                  friend.availabilities = docSnap.data().availableDates || [];
                  if (friend.selected) this.updateCalendarHeatmap();
                }
              }
            });
            this.unsubscribeFriends.push(unsubscribe);
          }
        }
      } catch (err) {
        console.error("Error loading friends:", err);
      } finally {
        this.loadingFriends = false;
      }
    },

    async loadFavourites() {
      if (!this.currentUser) return;
      this.isLoadingActivities = true;
      try {
        const userDoc = await getDoc(doc(db, "users", this.currentUser.uid));
        this.activities = userDoc.exists() ? userDoc.data().favouritesList || [] : [];

        this.calendar.getEvents().forEach(event => {
          if (event.extendedProps.isActivity) {
            event.remove();
          }
        });

        this.activities.forEach((activity) => {
          const startDate = this.parseActivityDate(activity.date);
          this.calendar.addEvent({
            id: activity.id,
            title: activity.title,
            start: startDate,
            allDay: true,
            backgroundColor: "#FFD700",
            borderColor: "#FFD700",
            textColor: "#000080",
            extendedProps: {
              isActivity: true,
              image: activity.image,
              location: activity.location,
              time: activity.date.split('•')[1]?.trim() || "",
              price: activity.price,
              duration: activity.duration,
            },
          });
        });
      } catch (error) {
        console.error("Error loading favourites:", error);
      } finally {
        this.isLoadingActivities = false;
      }
    },

    parseActivityDate(dateStr) {
      try {
        const parts = dateStr.split('•');
        let datePart = parts[0].trim();
        let timePart = parts[1]?.trim() || "12:00 AM";

        datePart = datePart.replace(/^\w+,\s*/, '');

        const currentYear = new Date().getFullYear();
        const fullDateStr = `${datePart} ${currentYear} ${timePart}`;

        const dateObj = new Date(Date.parse(fullDateStr));
        if (isNaN(dateObj)) {
          return new Date(Date.parse(`${datePart} ${currentYear}`)).toISOString();
        }
        return dateObj.toISOString();
      } catch {
        return new Date().toISOString();
      }
    },

    initCalendar() {
      const calendarEl = this.$refs.calendar;
      this.calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        headerToolbar: { left: "prev,next today", center: "title", right: "dayGridMonth,dayGridWeek" },
        height: "auto",
        eventDisplay: "block",
        eventContent: (arg) => ({
          html: `<div style="color:#000080; display:flex; align-items:center; height:100%; padding-left:4px;">${arg.event.title}</div>`,
        }),
        eventDidMount: (info) => {
          info.el.setAttribute('title', `${info.event.title}\nTime: ${info.event.extendedProps.time}\nLocation: ${info.event.extendedProps.location}\nPrice: ${info.event.extendedProps.price}`);

          info.el.addEventListener('mouseenter', e => {
            this.isMouseOverEvent = true;
            this.hoveredEvent = info.event;

            const rect = e.target.getBoundingClientRect();
            const calendarRect = this.$refs.calendar.getBoundingClientRect();

            let left = rect.left - calendarRect.left;
            const top = rect.top - calendarRect.top - 140;

            const tooltipWidth = 260;
            const viewportWidth = window.innerWidth;
            const absoluteLeft = rect.left + tooltipWidth;
            if (absoluteLeft > viewportWidth) {
              left -= (absoluteLeft - viewportWidth);
            }
            if (left < 0) left = 0;

            this.tooltipPos = { top, left };
          });

          info.el.addEventListener('mouseleave', () => {
            this.isMouseOverEvent = false;
            setTimeout(() => {
              if (!this.isMouseOverPopup && !this.isMouseOverEvent) {
                this.hoveredEvent = null;
              }
            }, 150);
          });
        },
      });
      this.calendar.render();
    },

    keepHoveredEvent() {
      this.isMouseOverPopup = true;
    },
    clearHoveredEvent() {
      this.isMouseOverPopup = false;
      setTimeout(() => {
        if (!this.isMouseOverPopup && !this.isMouseOverEvent) {
          this.hoveredEvent = null;
        }
      }, 150);
    },

    toggleFriend(friendId) {
      const friend = this.friends.find(f => f.id === friendId);
      if (!friend) return;
      friend.selected = !friend.selected;
      this.updateCalendarHeatmap();
    },

    updateCalendarHeatmap() {
      if (!this.calendar) return;
      const selectedFriends = this.friends.filter(f => f.selected);
      const availabilityCount = {};
      const max = selectedFriends.length;

      selectedFriends.forEach(friend => {
        friend.availabilities.forEach(date => {
          availabilityCount[date] = (availabilityCount[date] || 0) + 1;
        });
      });

      const allCells = this.calendar.el.querySelectorAll("[data-date]");
      allCells.forEach(cell => {
        const date = cell.getAttribute("data-date");
        const count = availabilityCount[date] || 0;
        const intensity = max ? count / max : 0;
        cell.style.backgroundColor = intensity ? this.getHeatmapColor(intensity) : "";
      });
    },

    initAvailabilityCalendar() {
      this.$nextTick(() => {
        if (this.availabilityCalendar) this.availabilityCalendar.destroy();
        const calEl = this.$refs.availabilityCalendar;
        this.availabilityCalendar = new Calendar(calEl, {
          plugins: [dayGridPlugin, interactionPlugin],
          initialView: "dayGridMonth",
          dateClick: (info) => {
            this.toggleUserAvailability(info.dateStr);
            this.updateAvailabilityCalendarDisplay();
          },
        });
        this.availabilityCalendar.render();
        this.updateAvailabilityCalendarDisplay();
      });
    },

    toggleUserAvailability(date) {
      const i = this.userAvailabilities.indexOf(date);
      if (i > -1) this.userAvailabilities.splice(i, 1);
      else this.userAvailabilities.push(date);
    },

    updateAvailabilityCalendarDisplay() {
      if (!this.availabilityCalendar) return;
      const allCells = this.availabilityCalendar.el.querySelectorAll("[data-date]");
      allCells.forEach(cell => {
        const date = cell.getAttribute("data-date");
        const available = this.userAvailabilities.includes(date);
        cell.style.backgroundColor = available ? "#38a169" : "";
        cell.style.color = available ? "white" : "";
      });
    },

    getHeatmapColor(intensity) {
      const shades = ["#c6f6d5", "#9ae6b4", "#68d391", "#48bb78", "#38a169", "#2f855a"];
      return shades[Math.min(Math.floor(intensity * shades.length), shades.length - 1)];
    },

    async saveAvailability() {
      if (!this.currentUser) return;
      try {
        const ref = doc(db, "users", this.currentUser.uid);
        await setDoc(ref, { availableDates: this.userAvailabilities }, { merge: true });

        const me = this.friends.find(f => f.id === this.currentUser.uid);
        if (me) me.availabilities = [...this.userAvailabilities];

        this.showAvailabilityModal = false;
        if (this.availabilityCalendar) this.availabilityCalendar.destroy();
        this.updateCalendarHeatmap();
      } catch (err) {
        console.error("Error saving availability:", err);
        alert("Failed to save availability");
      }
    },
  },
};
</script>

<style scoped>
.list-group-item.active {
  background-color: #38a169;
  border-color: #38a169;
}
.modal.show {
  background-color: rgba(0, 0, 0, 0.5);
}
.activities-scrollable {
  max-height: 500px;
  overflow-y: auto;
}

/* FullCalendar button styling - GREEN THEME */
:deep(.fc-button-primary) {
  background-color: #38a169 !important;
  border-color: #38a169 !important;
  color: white !important;
}

:deep(.fc-button-primary:hover) {
  background-color: #2f855a !important;
  border-color: #2f855a !important;
}

:deep(.fc-button-primary:not(:disabled):active),
:deep(.fc-button-primary:not(:disabled).fc-button-active) {
  background-color: #2f855a !important;
  border-color: #2f855a !important;
}

:deep(.fc-button-primary:focus) {
  box-shadow: 0 0 0 0.2rem rgba(56, 161, 105, 0.5) !important;
}

:deep(.fc-button-primary:disabled) {
  background-color: #9ae6b4 !important;
  border-color: #9ae6b4 !important;
}

:deep(.fc-daygrid-day.fc-day-today) {
  background-color: #c6f6d5 !important;
}

/* Event styling overrides for yellow bars with dark blue text */
:deep(.fc-event) {
  border-radius: 3px !important;
  font-weight: normal !important;
  padding: 2px 6px !important;
  cursor: default !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Tooltip styling */
.custom-tooltip {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  padding: 10px;
  width: 260px;
  border-radius: 4px;
  z-index: 1200;
  user-select: none;
}
.tooltip-image img {
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 8px;
}
.tooltip-content strong {
  display: block;
  margin-bottom: 6px;
  color: #000080;
}
</style>
