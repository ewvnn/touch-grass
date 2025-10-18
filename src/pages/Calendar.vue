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
              @click="fetchEventbriteEvents"
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
                <strong>{{ activity.name }}</strong>
                <small class="d-block text-muted">{{ activity.description }}</small>
                <small v-if="activity.start" class="d-block text-muted mt-1">
                  📅 {{ formatEventDate(activity.start) }}
                </small>
                <small v-if="activity.url" class="d-block text-success mt-1">
                  🔗 View on Eventbrite
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
            <p>Click on dates below to toggle your availability (green = available)</p>
            <div class="availability-grid">
              <button
                v-for="date in availabilityDates"
                :key="date"
                class="availability-date btn"
                :class="{ 'btn-success': isUserAvailable(date), 'btn-outline-secondary': !isUserAvailable(date) }"
                @click="toggleUserAvailability(date)"
              >
                {{ formatDate(date) }}
              </button>
            </div>
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
            <h5 class="modal-title">{{ selectedActivity?.name }}</h5>
            <button
              type="button"
              class="btn-close"
              @click="showActivityModal = false"
            ></button>
          </div>
          <div class="modal-body">
            <p>{{ selectedActivity?.description }}</p>
            <div v-if="selectedActivity?.url" class="mb-3">
              <a :href="selectedActivity.url" target="_blank" class="btn btn-sm btn-outline-success">
                View Event on Eventbrite
              </a>
            </div>
            <div class="mb-3">
              <label class="form-label">Select Date</label>
              <input
                type="date"
                class="form-control"
                v-model="activityDate"
                :min="selectedActivity?.start ? selectedActivity.start.split('T')[0] : ''"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Select Time</label>
              <input
                type="time"
                class="form-control"
                v-model="activityTime"
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

export default {
  name: 'CalendarComponent',
  data() {
    return {
      calendar: null,
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
          availabilities: [] // Will be populated from userAvailabilities
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
      activities: [
        { 
          id: 1, 
          name: 'Tech Innovation Summit 2025', 
          description: 'Join industry leaders for keynotes on AI, blockchain, and emerging technologies. Featuring workshops and networking sessions.',
          start: '2025-10-25T09:00:00',
          url: 'https://www.eventbrite.com'
        },
        { 
          id: 2, 
          name: 'Local Food & Wine Festival', 
          description: 'Celebrate local cuisine with tastings from 50+ vendors, live music, and cooking demonstrations from renowned chefs.',
          start: '2025-10-26T12:00:00',
          url: 'https://www.eventbrite.com'
        },
        { 
          id: 3, 
          name: 'Community Art Exhibition Opening', 
          description: 'Opening night reception for the annual contemporary art showcase featuring 30+ local artists. Free admission.',
          start: '2025-10-27T18:00:00',
          url: 'https://www.eventbrite.com'
        }
      ],
      isLoadingActivities: false
    };
  },
  mounted() {
    this.initCalendar();
    this.generateAvailabilityDates();
    this.fetchEventbriteEvents();
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
    toggleFriend(friendId) {
      const friend = this.friends.find(f => f.id === friendId);
      if (friend) {
        friend.selected = !friend.selected;
        
        // Sync 'Me' with userAvailabilities
        if (friendId === 0) {
          friend.availabilities = [...this.userAvailabilities];
        }
        
        this.updateCalendarHeatmap();
      }
    },
    updateCalendarHeatmap() {
      // Count availabilities per date
      const availabilityCount = {};
      const selectedFriends = this.friends.filter(f => f.selected);
      const maxFriends = selectedFriends.length;

      selectedFriends.forEach(friend => {
        friend.availabilities.forEach(date => {
          availabilityCount[date] = (availabilityCount[date] || 0) + 1;
        });
      });

      // Update calendar with background colors
      if (this.calendar) {
        this.calendar.render();
        
        // Apply background colors after render
        Object.keys(availabilityCount).forEach(date => {
          const count = availabilityCount[date];
          const intensity = maxFriends > 0 ? count / maxFriends : 0;
          const color = this.getHeatmapColor(intensity);
          
          const dayCell = this.calendar.el.querySelector(`[data-date="${date}"]`);
          if (dayCell) {
            dayCell.style.backgroundColor = color;
          }
        });

        // Reset days without availability
        const allDates = this.calendar.el.querySelectorAll('[data-date]');
        allDates.forEach(cell => {
          const date = cell.getAttribute('data-date');
          if (!availabilityCount[date]) {
            cell.style.backgroundColor = '';
          }
        });
      }
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
      // Generate green heatmap colors based on intensity (0 to 1)
      if (intensity === 0) return '';
      
      const greenShades = [
        '#c6f6d5', // lightest
        '#9ae6b4',
        '#68d391',
        '#48bb78',
        '#38a169',
        '#2f855a', // darkest
      ];
      
      const index = Math.min(
        Math.floor(intensity * greenShades.length),
        greenShades.length - 1
      );
      
      return greenShades[index];
    },
    saveAvailability() {
      // Update 'Me' friend with new availabilities
      const me = this.friends.find(f => f.id === 0);
      if (me) {
        me.availabilities = [...this.userAvailabilities];
      }
      
      this.showAvailabilityModal = false;
      this.updateCalendarHeatmap();
    },
    generateAvailabilityDates() {
      const dates = [];
      const today = new Date();
      
      // Generate next 30 days
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
    formatEventDate(dateStr) {
      const date = new Date(dateStr);
      const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' };
      return date.toLocaleDateString('en-US', options);
    },
    async fetchEventbriteEvents() {
      this.isLoadingActivities = true;
      
      try {
        // Replace with your actual Eventbrite API credentials and endpoint
        const EVENTBRITE_TOKEN = 'YOUR_EVENTBRITE_PRIVATE_TOKEN';
        const ORGANIZATION_ID = 'YOUR_ORGANIZATION_ID'; // or use other search parameters
        
        // Example: Fetch events by organization
        const response = await fetch(
          `https://www.eventbriteapi.com/v3/organizations/${ORGANIZATION_ID}/events/`,
          {
            headers: {
              'Authorization': `Bearer ${EVENTBRITE_TOKEN}`
            }
          }
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        
        const data = await response.json();
        
        // Transform Eventbrite events to our format
        this.activities = data.events.map(event => ({
          id: event.id,
          name: event.name.text,
          description: event.description?.text || event.summary || 'No description available',
          start: event.start.local,
          end: event.end.local,
          url: event.url,
          eventbriteId: event.id
        }));
        
      } catch (error) {
        console.error('Error fetching Eventbrite events:', error);
        
        // Fallback to realistic event examples if API fails
        this.activities = [
          { 
            id: 1, 
            name: 'Tech Innovation Summit 2025', 
            description: 'Join industry leaders for keynotes on AI, blockchain, and emerging technologies. Featuring workshops and networking sessions.',
            start: '2025-10-25T09:00:00',
            url: 'https://www.eventbrite.com'
          },
          { 
            id: 2, 
            name: 'Local Food & Wine Festival', 
            description: 'Celebrate local cuisine with tastings from 50+ vendors, live music, and cooking demonstrations from renowned chefs.',
            start: '2025-10-26T12:00:00',
            url: 'https://www.eventbrite.com'
          },
          { 
            id: 3, 
            name: 'Community Art Exhibition Opening', 
            description: 'Opening night reception for the annual contemporary art showcase featuring 30+ local artists. Free admission.',
            start: '2025-10-27T18:00:00',
            url: 'https://www.eventbrite.com'
          },
          { 
            id: 4, 
            name: 'Professional Networking Mixer', 
            description: 'Monthly networking event for young professionals across industries. Includes speed networking and guest speaker.',
            start: '2025-10-28T18:30:00',
            url: 'https://www.eventbrite.com'
          },
          { 
            id: 5, 
            name: 'Startup Pitch Night', 
            description: '10 early-stage startups pitch to investors and the community. Q&A session and drinks to follow.',
            start: '2025-10-29T19:00:00',
            url: 'https://www.eventbrite.com'
          },
          { 
            id: 6, 
            name: 'Charity 5K Run/Walk', 
            description: 'Annual fundraiser run supporting local education initiatives. All fitness levels welcome. T-shirt and medal included.',
            start: '2025-11-02T08:00:00',
            url: 'https://www.eventbrite.com'
          }
        ];
      } finally {
        this.isLoadingActivities = false;
      }
    },
    openActivityModal(activity) {
      this.selectedActivity = activity;
      this.activityDate = '';
      this.activityTime = '';
      this.showActivityModal = true;
    },
    signUpForActivity() {
      if (!this.activityDate || !this.activityTime) {
        alert('Please select both date and time');
        return;
      }

      const newEvent = {
        title: this.selectedActivity.name,
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

/* Change FullCalendar colors to green */
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

.availability-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
}

.availability-date {
  padding: 10px;
  font-size: 0.9rem;
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