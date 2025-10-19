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
            <div class="list-group list-group-flush">
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
            <button 
              class="btn btn-sm btn-success" 
              @click="loadEventsFromJson"
              :disabled="isLoadingActivities"
            >
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
            <div v-else class="list-group list-group-flush">
              <button
                v-for="activity in activities"
                :key="activity.id"
                type="button"
                class="list-group-item list-group-item-action"
                @click="openActivityModal(activity)"
              >
                <strong>{{ activity.title }}</strong>
                <small class="d-block text-muted">{{ activity.location }}</small>
                <small class="d-block text-muted mt-1">
                  📅 {{ activity.date }}
                </small>
                <small class="d-block mt-1">
                  <span class="badge bg-info">{{ activity.category }}</span>
                  <span v-if="activity.badge" class="badge bg-warning ms-1">{{ activity.badge }}</span>
                </small>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Calendar Area -->
      <div class="col-md-9">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Availability Calendar</h5>
            <button class="btn btn-success" @click="showAvailabilityModal = true">
              Select Your Availability
            </button>
          </div>
          <div class="card-body">
            <div ref="calendar"></div>
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
            <button
              type="button"
              class="btn-close"
              @click="showAvailabilityModal = false"
            ></button>
          </div>
          <div class="modal-body">
            <p>Click on dates in the calendar below to toggle your availability (green = available)</p>
            <div ref="availabilityCalendar" class="availability-calendar-container"></div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn-secondary"
              @click="showAvailabilityModal = false"
            >
              Close
            </button>
            <button
              type="button"
              class="btn-success"
              @click="saveAvailability"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showAvailabilityModal"
      class="modal-backdrop fade show"
    ></div>

    <!-- Activity Sign Up Modal -->
    <div
      class="modal"
      :class="{ show: showActivityModal }"
      :style="{ display: showActivityModal ? 'block' : 'none' }"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedActivity?.title }}</h5>
            <button
              type="button"
              class="btn-close"
              @click="showActivityModal = false"
            ></button>
          </div>
          <div class="modal-body">
            <div v-if="selectedActivity?.image" class="mb-3">
              <img :src="selectedActivity.image" :alt="selectedActivity.title" class="img-fluid rounded" />
            </div>
            <p><strong>Location:</strong> {{ selectedActivity?.location }}</p>
            <p><strong>Duration:</strong> {{ selectedActivity?.duration }}</p>
            <p><strong>Price:</strong> {{ selectedActivity?.price }}</p>
            <div class="mb-3">
              <label class="form-label">Select Date</label>
              <input
                type="date"
                class="form-control"
                v-model="activityDate"
                :placeholder="selectedActivity?.date"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Select Time</label>
              <input
                type="time"
                class="form-control"
                v-model="activityTime"
                :placeholder="getEventTime(selectedActivity?.date)"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn-secondary"
              @click="showActivityModal = false"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn-success"
              @click="signUpForActivity"
            >
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showActivityModal"
      class="modal-backdrop fade show"
    ></div>
  </div>
</template>

<script>
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import eventsData from '@/data/events.json';

export default {
  name: 'CalendarComponent',
  data() {
    return {
      calendar: null,
      availabilityCalendar: null,
      showAvailabilityModal: false,
      showActivityModal: false,
      selectedActivity: null,
      activityDate: '',
      activityTime: '',
      userEvents: [],
      userAvailabilities: [],
      availabilityDates: [],
      friends: [
        {
          id: 0,
          name: 'Me',
          selected: false,
          availabilities: []
        },
        {
          id: 1,
          name: 'Alice Johnson',
          selected: false,
          availabilities: ['2025-10-20', '2025-10-21', '2025-10-25', '2025-10-27']
        },
        {
          id: 2,
          name: 'Bob Smith',
          selected: false,
          availabilities: ['2025-10-20', '2025-10-22', '2025-10-25', '2025-10-28']
        },
        {
          id: 3,
          name: 'Charlie Brown',
          selected: false,
          availabilities: ['2025-10-20', '2025-10-21', '2025-10-23', '2025-10-25']
        },
        {
          id: 4,
          name: 'Diana Prince',
          selected: false,
          availabilities: ['2025-10-21', '2025-10-24', '2025-10-25', '2025-10-26']
        }
      ],
      activities: [],
      isLoadingActivities: false
    };
  },
  mounted() {
    this.initCalendar();
    this.generateAvailabilityDates();
    this.loadEventsFromJson();
  },
  watch: {
    showAvailabilityModal(newVal) {
      if (newVal) {
        this.initAvailabilityCalendar();
      }
    }
  },
  methods: {
    initCalendar() {
      const calendarEl = this.$refs.calendar;
      this.calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek'
        },
        height: 'auto',
        events: this.userEvents,
        eventColor: '#38a169',
        dayCellDidMount: (info) => {
          this.updateDayBackground(info);
        }
      });
      this.calendar.render();
    },
    loadEventsFromJson() {
      this.isLoadingActivities = true;
      
      try {
        // Load events from imported JSON file
        this.activities = eventsData;
      } catch (error) {
        console.error('Error loading events from JSON:', error);
        this.activities = [];
      } finally {
        this.isLoadingActivities = false;
      }
    },
    toggleFriend(friendId) {
      const friend = this.friends.find(f => f.id === friendId);
      if (friend) {
        friend.selected = !friend.selected;
        
        if (friendId === 0) {
          friend.availabilities = [...this.userAvailabilities];
        }
        
        this.updateCalendarHeatmap();
      }
    },
    updateCalendarHeatmap() {
      const availabilityCount = {};
      const selectedFriends = this.friends.filter(f => f.selected);
      const maxFriends = selectedFriends.length;

      selectedFriends.forEach(friend => {
        friend.availabilities.forEach(date => {
          availabilityCount[date] = (availabilityCount[date] || 0) + 1;
        });
      });

      if (this.calendar) {
        this.calendar.render();
        
        Object.keys(availabilityCount).forEach(date => {
          const count = availabilityCount[date];
          const intensity = maxFriends > 0 ? count / maxFriends : 0;
          const color = this.getHeatmapColor(intensity);
          
          const dayCell = this.calendar.el.querySelector(`[data-date="${date}"]`);
          if (dayCell) {
            dayCell.style.backgroundColor = color;
          }
        });

        const allDates = this.calendar.el.querySelectorAll('[data-date]');
        allDates.forEach(cell => {
          const date = cell.getAttribute('data-date');
          if (!availabilityCount[date]) {
            cell.style.backgroundColor = '';
          }
        });
      }
    },
    initAvailabilityCalendar() {
      this.$nextTick(() => {
        if (!this.$refs.availabilityCalendar) return;
        
        // Destroy existing calendar if any
        if (this.availabilityCalendar) {
          this.availabilityCalendar.destroy();
        }
        
        const calendarEl = this.$refs.availabilityCalendar;
        this.availabilityCalendar = new Calendar(calendarEl, {
          plugins: [dayGridPlugin, interactionPlugin],
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: ''
          },
          height: 'auto',
          dateClick: (info) => {
            this.toggleUserAvailability(info.dateStr);
            this.updateAvailabilityCalendarDisplay();
          },
          dayCellDidMount: (info) => {
            const dateStr = info.date.toISOString().split('T')[0];
            if (this.isUserAvailable(dateStr)) {
              info.el.style.backgroundColor = '#38a169';
              info.el.style.color = 'white';
              info.el.style.cursor = 'pointer';
            } else {
              info.el.style.cursor = 'pointer';
            }
          }
        });
        
        this.availabilityCalendar.render();
      });
    },
    updateAvailabilityCalendarDisplay() {
      if (!this.availabilityCalendar) return;
      
      const allDates = this.availabilityCalendar.el.querySelectorAll('[data-date]');
      allDates.forEach(cell => {
        const date = cell.getAttribute('data-date');
        if (this.isUserAvailable(date)) {
          cell.style.backgroundColor = '#38a169';
          cell.style.color = 'white';
        } else {
          cell.style.backgroundColor = '';
          cell.style.color = '';
        }
      });
    },
    updateDayBackground(info) {
      const dateStr = info.date.toISOString().split('T')[0];
      const selectedFriends = this.friends.filter(f => f.selected);
      const maxFriends = selectedFriends.length;
      
      if (maxFriends === 0) return;

      const count = selectedFriends.filter(f => 
        f.availabilities.includes(dateStr)
      ).length;

      if (count > 0) {
        const intensity = count / maxFriends;
        info.el.style.backgroundColor = this.getHeatmapColor(intensity);
      }
    },
    getHeatmapColor(intensity) {
      if (intensity === 0) return '';
      
      const greenShades = [
        '#c6f6d5',
        '#9ae6b4',
        '#68d391',
        '#48bb78',
        '#38a169',
        '#2f855a',
      ];
      
      const index = Math.min(
        Math.floor(intensity * greenShades.length),
        greenShades.length - 1
      );
      
      return greenShades[index];
    },
    saveAvailability() {
      const me = this.friends.find(f => f.id === 0);
      if (me) {
        me.availabilities = [...this.userAvailabilities];
      }
      
      this.showAvailabilityModal = false;
      
      // Destroy the availability calendar when modal closes
      if (this.availabilityCalendar) {
        this.availabilityCalendar.destroy();
        this.availabilityCalendar = null;
      }
      
      this.updateCalendarHeatmap();
    },
    generateAvailabilityDates() {
      const dates = [];
      const today = new Date();
      
      for (let i = 0; i < 30; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toISOString().split('T')[0]);
      }
      
      this.availabilityDates = dates;
    },
    toggleUserAvailability(date) {
      const index = this.userAvailabilities.indexOf(date);
      if (index > -1) {
        this.userAvailabilities.splice(index, 1);
      } else {
        this.userAvailabilities.push(date);
      }
    },
    isUserAvailable(date) {
      return this.userAvailabilities.includes(date);
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      const options = { month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    },
    openActivityModal(activity) {
      this.selectedActivity = activity;
      // Parse the date string and set as placeholder values
      const parsedDate = this.parseEventDate(activity.date);
      this.activityDate = parsedDate.date;
      this.activityTime = parsedDate.time;
      this.showActivityModal = true;
    },
    parseEventDate(dateStr) {
      // Parse "Sun, 19 Oct • 12:00 PM" format
      const parts = dateStr.split('•');
      const datePart = parts[0]?.trim();
      const timePart = parts[1]?.trim();
      
      // Extract day and month
      const dateMatch = datePart?.match(/(\d+)\s+(\w+)/);
      let formattedDate = '';
      
      if (dateMatch) {
        const day = dateMatch[1].padStart(2, '0');
        const monthName = dateMatch[2];
        const monthMap = {
          'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
          'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
          'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
        };
        const month = monthMap[monthName] || '01';
        const year = new Date().getFullYear();
        formattedDate = `${year}-${month}-${day}`;
      }
      
      // Convert 12-hour to 24-hour time
      let formattedTime = '';
      if (timePart) {
        const timeMatch = timePart.match(/(\d+):(\d+)\s*(AM|PM)/i);
        if (timeMatch) {
          let hours = parseInt(timeMatch[1]);
          const minutes = timeMatch[2];
          const meridiem = timeMatch[3].toUpperCase();
          
          if (meridiem === 'PM' && hours !== 12) hours += 12;
          if (meridiem === 'AM' && hours === 12) hours = 0;
          
          formattedTime = `${hours.toString().padStart(2, '0')}:${minutes}`;
        }
      }
      
      return { date: formattedDate, time: formattedTime };
    },
    getEventTime(dateStr) {
      if (!dateStr) return '';
      const parsed = this.parseEventDate(dateStr);
      return parsed.time;
    },
    signUpForActivity() {
      if (!this.activityDate || !this.activityTime) {
        alert('Please select both date and time');
        return;
      }

      const newEvent = {
        title: this.selectedActivity.title,
        start: `${this.activityDate}T${this.activityTime}`,
        backgroundColor: '#38a169',
        borderColor: '#2f855a'
      };

      this.userEvents.push(newEvent);
      
      if (this.calendar) {
        this.calendar.addEvent(newEvent);
      }

      this.showActivityModal = false;
      this.selectedActivity = null;
      this.activityDate = '';
      this.activityTime = '';
    }
  }
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

.card {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.list-group-item {
  cursor: pointer;
  transition: background-color 0.2s;
}

.list-group-item:hover:not(.active) {
  background-color: #f8f9fa;
}

.btn-success {
  background-color: #38a169;
  border-color: #38a169;
}

.btn-success:hover {
  background-color: #2f855a;
  border-color: #2f855a;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

:deep(.fc-button-primary) {
  background-color: #38a169 !important;
  border-color: #38a169 !important;
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

:deep(.fc-daygrid-day.fc-day-today) {
  background-color: #c6f6d5 !important;
}

.availability-calendar-container {
  min-height: 400px;
}

.availability-calendar-container :deep(.fc-daygrid-day) {
  cursor: pointer;
  transition: background-color 0.2s;
}

.availability-calendar-container :deep(.fc-daygrid-day:hover) {
  opacity: 0.8;
}

.activities-scrollable {
  max-height: 500px;
  overflow-y: auto;
}

.activities-scrollable::-webkit-scrollbar {
  width: 8px;
}

.activities-scrollable::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.activities-scrollable::-webkit-scrollbar-thumb {
  background: #38a169;
  border-radius: 4px;
}

.activities-scrollable::-webkit-scrollbar-thumb:hover {
  background: #2f855a;
}
</style>