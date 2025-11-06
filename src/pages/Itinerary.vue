<template>
  <div id="itinerary-planner">

    <div class="itinerary-split-view container-fluid">
      <div class="row g-3 w-100">

        <!-- Saved Activities Column: Left on desktop (md+), Second on mobile -->
        <div class="col-12 col-md-6 order-2 order-md-2">
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
                <draggable v-model="activities" :group="{ name: 'itinerary', pull: 'clone', put: false }"
                  :clone="cloneActivity" item-key="id" class="saved-activities-draggable">
                  <template #item="{ element }">
                    <div class="list-group-item" style="cursor: grab;">
                      <strong>{{ element.title }}</strong>
                      <small class="d-block text-muted">{{ element.location }}</small>
                      <small class="d-block text-muted mt-1">📅 {{ element.date }}</small>
                      <small class="d-block mt-1">
                        <span 
                        class="badge" 
                        :style="{ 
                          backgroundColor: tagStyles(element.category).bg, 
                          color: tagStyles(element.category).fg 
                        }"
                      >
                        {{ element.category }}
                      </span>
                      <span 
                        v-if="element.badge" 
                        class="badge ms-1"
                        :style="{ 
                          backgroundColor: badgeStyles(element.badge).bg, 
                          color: badgeStyles(element.badge).fg 
                        }"
                      >
                        {{ element.badge }}
                      </span>
                      </small>
                    </div>
                  </template>
                </draggable>
              </div>
            </div>
          </div>
        </div>

        <!-- Itinerary Sidebar: Right on desktop (md+), First on mobile -->
        <div class="col-12 col-md-6 order-1 order-md-1 itinerary-sidebar">
          <h2>Itinerary</h2>

          <div v-if="Object.keys(dailyItinerary).length === 0" class="empty-state-prompt p-5 text-center">
            <p class="mb-4 text-secondary fs-5">Nothing's planned yet. Let's get started!</p>
            <button @click="showDateSelectionModal = true"
              class="btn btn-lg rounded-pill px-4 py-3 shadow-sm text-white bg-success">
              <span class="me-2">📅</span> Add trip dates
            </button>
          </div>

          <div v-else>

            <div class="d-flex justify-content-between align-items-center mb-4">
              <span class="fs-5 fw-bold text-success">{{ dateRangeDisplay }}</span>
              <div>
                <button class="btn btn-sm btn-success me-2" @click="saveItinerary"
                  :disabled="!currentUser || !tripId || isSaving">
                  <span v-if="isSaving" class="spinner-border spinner-border-sm me-1" role="status"></span>
                  <span v-else class="me-1">💾</span>
                  Save
                </button>
                <button @click="showDateSelectionModal = true" class="btn btn-sm btn-outline-secondary">
                  <i class="fas fa-calendar-edit"></i> Edit Dates
                </button>
              </div>
            </div>

            <div v-for="date in Object.keys(dailyItinerary)" :key="date" class="itinerary-day-section">

              <h3 @click="setActiveDay(date)" class="day-header" :class="{ 'active-day': date === activeDate }">
                {{ formatDay(date) }}

                <span class="day-header-controls">
                  <button @click.stop="showDeleteDayConfirm(date)" class="btn btn-sm btn-danger"
                    title="Delete this day">
                    Delete
                  </button>

                  <span @click.stop="toggleDay(date)"
                    style="width: 20px; display: inline-block; text-align: center; cursor: pointer; color: green;">
                    {{ dailyItinerary[date].isExpanded ? '▲' : '▼' }}
                  </span>
                </span>
              </h3>

              <div v-show="dailyItinerary[date].isExpanded" class="place-list">

                <draggable v-model="dailyItinerary[date].places" group="itinerary" @end="onDragEnd"
                  @add="onActivityAdded($event, date)" item-key="place_id" class="daily-itinerary-draggable">
                  <template #item="{ element, index }">
                    <div class="list-group-item d-flex align-items-start mb-3 p-3 itinerary-item shadow-sm">
                      <div class="index-circle">{{ index + 1 }}</div>

                      <div class="place-details flex-grow-1 ms-3">
                        <h5 class="mb-1" style="cursor: grab;">{{ element.name }}</h5>

                        <div class="d-flex align-items-center mb-2">
                          <img src="../../photos/draggable-icon.png" class="drag-icon" alt="">
                          <img :src="element.photoUrl" class="place-thumbnail me-2" :alt="element.name" />
                          <div>
                            <small class="text-muted d-block"><i class="fas fa-map-marker-alt"></i> {{ element.address
                            }}</small>
                            <a :href="element.website" target="_blank" class="website-link d-block"><i
                                class="fas fa-link"></i>
                              Website: {{ element.name }}</a>
                          </div>
                        </div>

                        <p class="description-text mb-2">{{ element.description }}</p>

                        <div v-if="index > 0 && element.distance"
                          class="route-info d-flex align-items-center mt-2 pt-2 border-top">
                          <span class="distance-text me-3"><i class="fas fa-route"></i> {{ element.distance }} ({{
                            element.duration }})</span>
                          <a :href="getDirectionsUrl(dailyItinerary[date].places[index - 1], element)" target="_blank"
                            class="btn btn-sm btn-link p-0 directions-btn">Open in Maps</a>
                        </div>
                      </div>

                      <div class="d-flex align-items-center flex-shrink-0 ms-2 control-group">
                        <button @click="removePlace(date, index)" class="btn btn-sm btn-outline-danger p-1"
                          title="Remove place">
                          <span>🗑️</span>
                        </button>
                      </div>
                    </div>
                  </template>
                </draggable>

                <button @click="addPlacePrompt = true; selectedDate = date"
                  class="btn btn-block btn-outline-secondary mt-3 add-place-btn">
                  <i class="fas fa-plus"></i> Add a place
                </button>
              </div>
              <small v-if="!tripId" class="text-muted d-block mt-2">
                Choose dates first to create this trip.
              </small>
              <small v-else-if="lastSavedAt" class="text-muted d-block mt-2">
                Last saved: {{ new Date(lastSavedAt).toLocaleTimeString() }}
              </small>
              <hr />
            </div>
          </div>


          <!-- <button class="btn btn-success w-100" @click="saveItinerary" :disabled="!currentUser || !tripId || isSaving">
              <span v-if="isSaving" class="spinner-border spinner-border-sm me-2"></span>
              Save itinerary
            </button> -->
          <!-- <small v-if="!tripId" class="text-muted d-block mt-2">
              Choose dates first to create this trip.
            </small>
            <small v-else-if="lastSavedAt" class="text-muted d-block mt-2">
              Last saved: {{ new Date(lastSavedAt).toLocaleTimeString() }}
            </small> -->

        </div>

        <!-- Map Container: Always at the bottom, full width, Third on mobile -->
        <div class="col-12 order-3 map-container">
          <div id="google-map"></div>

          <div v-if="isStreetViewActive" id="street-view-overlay">
            <div id="street-view-panorama"></div>
            <button @click="exitStreetView" class="btn btn-secondary exit-pano-btn">
              <i class="fas fa-times"></i> Exit Street View
            </button>
          </div>

          <div v-if="selectedPlace" class="place-info-popup card shadow-lg p-3">
            <button class="close-btn" @click="selectedPlace = null">&times;</button>
            <div class="row g-0">
              <div class="col-md-8">
                <h5 class="card-title">{{ selectedPlace.name }}</h5>
                <p class="card-text description-text">{{ selectedPlace.description }}</p>

                <p class="rating-text fw-bold"><i class="fas fa-star text-warning me-1"></i> {{ selectedPlace.rating }}
                  ({{ selectedPlace.user_ratings_total }})</p>

                <p class="address-text"><i class="fas fa-map-marker-alt"></i> {{ selectedPlace.address }}</p>

                <a :href="selectedPlace.website" target="_blank" class="website-link"><i class="fas fa-link"></i>
                  Website:
                  {{ selectedPlace.name }}</a>

                <div class="d-flex mt-2">
                  <select v-model="selectedDateToAdd" class="form-select form-select-sm me-2" aria-label="Select Date"
                    :disabled="!Object.keys(dailyItinerary).length">
                    <option disabled value="">Select Date</option>
                    <option v-for="date in Object.keys(dailyItinerary)" :key="date" :value="date">{{ formatDay(date) }}
                    </option>
                  </select>
                  <button @click="addToItinerary" :disabled="!selectedDateToAdd || !Object.keys(dailyItinerary).length"
                    class="btn btn-sm btn-success">
                    <i class="fas fa-route"></i> Add to Itinerary
                  </button>
                </div>
                <small v-if="!Object.keys(dailyItinerary).length" class="text-danger mt-2">Please set trip dates
                  first.</small>
              </div>
              <div class="col-md-4 text-center">
                <img :src="selectedPlace.photoUrl" class="img-fluid rounded-start place-photo"
                  :alt="selectedPlace.name">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <footer-component></footer-component>

    <div v-if="showDateSelectionModal" class="modal-overlay">
      <div class="modal-content p-4 shadow-xl">
        <h4 class="mb-3">Select Your Trip Dates</h4>
        <div class="row mb-4">
          <div class="col-md-6">
            <label for="startDate" class="form-label fw-bold">Start Date</label>
            <input type="date" id="startDate" v-model="startDateInput" class="form-control" @change="validateDates"
              :min="todayDateString" />
          </div>
          <div class="col-md-6">
            <label for="endDate" class="form-label fw-bold">End Date</label>
            <input type="date" id="endDate" v-model="endDateInput" class="form-control" :min="startDateInput"
              @change="validateDates" />
          </div>
        </div>

        <p v-if="dateError" class="text-danger small">{{ dateError }}</p>

        <div class="d-flex justify-content-end">
          <button @click="showDateSelectionModal = false; startDateInput = ''; endDateInput = ''; dateError = ''"
            class="btn btn-secondary me-2">Cancel</button>
          <button @click="handleDateSelection" :disabled="!startDateInput || !endDateInput || !!dateError"
            class="btn btn-success">
            Start Planning
          </button>
        </div>
      </div>
    </div>

    <div v-if="addPlacePrompt" class="modal-overlay">
      <div class="modal-content p-4 shadow-lg">
        <h4>Add a place on {{ formatDay(selectedDate) }}</h4>
        <input type="text" id="place-search-input" class="form-control mt-3 mb-3"
          placeholder="Search for a location...">
        <div class="d-flex justify-content-end">
          <button @click="addPlacePrompt = false" class="btn btn-secondary me-2">Cancel</button>
        </div>
      </div>
    </div>

    <div v-if="showDeleteConfirmModal" class="modal-overlay">
      <div class="modal-content p-4 shadow-xl">
        <h4 class="mb-3">Delete Day</h4>
        <p>Are you sure you want to delete <strong>{{ formatDay(dateToDelete) }}</strong> and all its planned
          activities?
        </p>
        <p class="text-danger fw-bold">This action cannot be undone (until you save).</p>

        <div class="d-flex justify-content-end mt-4">
          <button @click="showDeleteConfirmModal = false; dateToDelete = null;" class="btn btn-secondary me-2">
            Cancel
          </button>
          <button @click="deleteDay" class="btn btn-danger">
            Yes, Delete
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { nextTick } from 'vue';
import { auth, db } from "../firebase.js"; // Adjust path if needed
import {
  doc, setDoc, getDoc, addDoc, collection, serverTimestamp, onSnapshot,
  getDocs, query, orderBy, limit, updateDoc
} from "firebase/firestore";

import { onAuthStateChanged } from "firebase/auth";
import draggable from 'vuedraggable';
import { tagStyles, badgeStyles } from "@/lib/tagColors";

export default {
  name: 'ItineraryPlanner',
  components: {
    draggable,
  },
  data() {
    return {
      // Itinerary Data Structure
      itinerary: [], // The main list for quick check of emptiness
      dailyItinerary: {},
      activeDate: null, // **INITIALIZED AS EMPTY OBJECT**
      tripId: null,         // set this (route param, or create one)
      isSaving: false,
      // _saveTimer: null, // Removed for manual save
      _unsubRealtime: null,
      lastSavedAt: null,

      // State for Date Selection Flow
      showDateSelectionModal: false,
      startDateInput: '', // YYYY-MM-DD
      endDateInput: '', // YYYY-MM-DD
      dateError: '',
      tagStyles,
      badgeStyles,

      //favourite list
      activities: [],
      currentUser: null,
      isLoadingActivities: false,

      // Map/Search State
      map: null,
      marker: null,
      geocoder: null,
      autocomplete: null,
      selectedPlace: null, // Holds the detailed place object for the floating pop-up
      selectedDateToAdd: '',

      // NEW: Directions API instances
      directionsService: null,
      directionsRenderer: null,

      // UI State
      hasAccommodation: false,
      dateRangeDisplay: 'No Dates Set', // Updated when dates are selected
      addPlacePrompt: false, // Controls the search prompt overlay
      selectedDate: null, // Used when adding a place via the prompt
      currentMarkers: [],
      streetViewService: null,
      characterMarker: null, // NEW: Service to check for Street View data
      panorama: null,         // NEW: The Street View viewer object
      isStreetViewActive: false,

      // *** NEW: DATA FOR DELETE DAY MODAL ***
      showDeleteConfirmModal: false,
      dateToDelete: null,
    };
  },
  mounted() {
    this.loadGoogleMapsScript();
    onAuthStateChanged(auth, async (user) => {
      this.currentUser = user;
      if (user) {
        await this.loadFavourites();

        // if you have a route param, prefer it:
        const routeTripId = this.$route?.params?.tripId;
        if (routeTripId) {
          await this.loadItinerary(routeTripId);
          this.startRealtime();
        } else {
          await this.loadLatestItinerary();   // <— new helper below
        }
      } else {
        this.activities = [];
        this.tripId = null;
      }
    });
  },

  unmounted() {
    if (this._unsubRealtime) this._unsubRealtime();
  },


  computed: {
    todayDateString() {
      // Returns today's date in YYYY-MM-DD format (e.g., '2025-10-29')
      const today = new Date();
      // Using toISOString and slicing ensures the format is always correct
      return today.toISOString().split('T')[0];
    },
    // *** NEW: HELPER FOR ACTIVE DAY ***
    sortedDatesActiveFirst() {
      // This makes the active day jump to the top of the list when clicked
      if (!this.activeDate) return Object.keys(this.dailyItinerary).sort();

      return Object.keys(this.dailyItinerary).sort((a, b) => {
        if (a === this.activeDate) return -1;
        if (b === this.activeDate) return 1;
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
    }
  },
  methods: {
    loadGoogleMapsScript() {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      if (window.google) {
        this.initMap();
        return;
      }
      const script = document.createElement('script');
      // **IMPORTANT**: Replace 'YOUR_API_KEY' with your actual Google Maps API Key
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = this.initMap;
      document.head.appendChild(script);
    },

    async loadLatestItinerary() {
      if (!this.currentUser) return; // Guard
      const q = query(
        collection(db, "users", this.currentUser.uid, "itineraries"),
        orderBy("updatedAt", "desc"),
        limit(1)
      );
      const snap = await getDocs(q);
      if (snap.empty) {
        console.log("No itineraries found. Waiting for user to create one.");
        return; // No itinerary to load
      }

      const docSnap = snap.docs[0];
      const data = docSnap.data();
      this.tripId = docSnap.id;
      this.dailyItinerary = data.dailyItinerary || {};

      const keys = Object.keys(this.dailyItinerary).sort();
      if (keys.length) {
        this.setActiveDay(keys[0]); // Set first day as active
        this.startDateInput = data.startDate || keys[0];
        this.endDateInput = data.endDate || keys[keys.length - 1];
        this.dateRangeDisplay = this.formatDateRangeDisplay(keys[0], keys[keys.length - 1]);
      } else {
        // Has a tripId, but no dates (e.g., user deleted all)
        this.dateRangeDisplay = 'No Dates Set';
        this.startDateInput = data.startDate || "";
        this.endDateInput = data.endDate || "";
      }

      this.updateItineraryList();
      this.startRealtime(); // Start listening for live updates
      this.$nextTick(() => this.renderRoute()); // Render map on load
    },


    startRealtime() {
      if (!this.currentUser || !this.tripId) return;
      if (this._unsubRealtime) this._unsubRealtime();

      console.log(`Starting realtime listener for trip: ${this.tripId}`);
      this._unsubRealtime = onSnapshot(
        doc(db, "users", this.currentUser.uid, "itineraries", this.tripId),
        (snap) => {

          if (!snap.exists()) {
            console.warn("Realtime: Trip doc deleted from under us!");
            this.tripId = null;
            this.dailyItinerary = {};
            this.dateRangeDisplay = 'No Dates Set';
            return;
          };

          const d = snap.data();

          // This check is now a good backup
          if (JSON.stringify(this.dailyItinerary) === JSON.stringify(d.dailyItinerary)) {
            console.log("Realtime: No changes detected.");
            return;
          }
          console.log("Realtime: Detected remote changes, updating local data.");

          this.dailyItinerary = d.dailyItinerary || {};

          const keys = Object.keys(this.dailyItinerary).sort();
          if (keys.length > 0) {
            this.dateRangeDisplay = this.formatDateRangeDisplay(keys[0], keys[keys.length - 1]);
            this.ensureValidActiveDate();
          } else {
            this.dateRangeDisplay = 'No Dates Set';
            this.activeDate = null;
          }

          this.updateItineraryList();
          this.$nextTick(() => this.renderRoute());
        }
      );
    },



    // *** NEW: HELPER METHOD FOR DELETE/LOAD ***
    ensureValidActiveDate() {
      const keys = Object.keys(this.dailyItinerary);
      if (keys.length === 0) {
        this.activeDate = null;
        return;
      }
      // If activeDate is no longer in the list, set a new one
      if (!this.dailyItinerary[this.activeDate]) {
        this.setActiveDay(keys.sort()[0]); // Set to first available day
      }
    },



    async handleDateSelection() {
      if (this.dateError) return;

      const start = new Date(this.startDateInput + 'T00:00:00Z');
      const end = new Date(this.endDateInput + 'T00:00:00Z');
      const dayMs = 1000 * 60 * 60 * 24;

      // --- THIS IS THE FIX ---
      // Start with a *copy* of the existing itinerary, NOT a blank object.
      const newDailyItinerary = { ...this.dailyItinerary };

      // Loop through the *selected* date range
      for (let t = start.getTime(); t <= end.getTime(); t += dayMs) {
        const dateStr = new Date(t).toISOString().split('T')[0];

        // If the day *doesn't* exist in our copy, add it as a new empty day.
        // If it *does* exist (like Nov 19), this check is skipped,
        // and the existing data is preserved.
        if (!newDailyItinerary[dateStr]) {
          newDailyItinerary[dateStr] = {
            isExpanded: true,
            places: []
          };
        }
      }

      // We no longer need the destructive "finalDailyItinerary" filtering logic.
      // This new object *is* the final object.
      this.dailyItinerary = newDailyItinerary;

      // --- END OF FIX ---

      // Now, find the *true* first and last day from all keys
      const allKeys = Object.keys(this.dailyItinerary).sort();
      const firstDay = allKeys[0];
      const lastDay = allKeys[allKeys.length - 1];

      // Update the main inputs to reflect the *full* range
      this.startDateInput = firstDay;
      this.endDateInput = lastDay;
      this.dateRangeDisplay = this.formatDateRangeDisplay(firstDay, lastDay);

      this.showDateSelectionModal = false;
      this.updateItineraryList();
      this.ensureValidActiveDate(); // Make sure active date is correct

      // ---- create or save to Firestore ----
      if (!this.currentUser) return; // guard

      if (!this.tripId) {
        console.log("Creating new trip...");
        const ref = await addDoc(
          collection(db, "users", this.currentUser.uid, "itineraries"),
          {
            title: this.dateRangeDisplay || "Trip",
            startDate: this.startDateInput,
            endDate: this.endDateInput,
            dailyItinerary: this.dailyItinerary,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          }
        );
        this.tripId = ref.id;
        this.startRealtime(); // Start listening
      } else {
        // Dates changed, save the (now correctly merged) itinerary
        console.log("Dates changed, saving existing trip...");
        this.saveItinerary();
      }
    },


    // async handleDateSelection() {
    //   if (this.dateError) return;

    //   // ---- build dailyItinerary from dates ----
    //   const start = new Date(this.startDateInput + 'T00:00:00Z');
    //   const end = new Date(this.endDateInput + 'T00:00:00Z');
    //   const dayMs = 1000 * 60 * 60 * 24;

    //   const newDailyItinerary = {};
    //   for (let t = start.getTime(); t <= end.getTime(); t += dayMs) {
    //     const dateStr = new Date(t).toISOString().split('T')[0];
    //     newDailyItinerary[dateStr] = this.dailyItinerary[dateStr] || {
    //       isExpanded: true,
    //       places: []
    //     };
    //   }

    //   // Filter out days that are no longer in the range
    //   const finalDailyItinerary = {};
    //   Object.keys(newDailyItinerary).sort().forEach(dateStr => {
    //     const date = new Date(dateStr + 'T00:00:00Z');
    //     if (date.getTime() >= start.getTime() && date.getTime() <= end.getTime()) {
    //       finalDailyItinerary[dateStr] = newDailyItinerary[dateStr];
    //     }
    //   });

    //   this.dailyItinerary = finalDailyItinerary;

    //   const keys = Object.keys(this.dailyItinerary);
    //   if (keys.length > 0) this.setActiveDay(keys[0]);

    //   this.dateRangeDisplay = keys.length
    //     ? this.formatDateRangeDisplay(keys[0], keys[keys.length - 1])
    //     : 'No Dates Set';

    //   this.showDateSelectionModal = false;
    //   this.updateItineraryList();
    //   this.ensureValidActiveDate(); // Make sure active date is correct

    //   // ---- create or save to Firestore ----
    //   if (!this.currentUser) return; // guard

    //   if (!this.tripId) {
    //     console.log("Creating new trip...");
    //     const ref = await addDoc(
    //       collection(db, "users", this.currentUser.uid, "itineraries"),
    //       {
    //         title: this.dateRangeDisplay || "Trip",
    //         startDate: this.startDateInput,
    //         endDate: this.endDateInput,
    //         dailyItinerary: this.dailyItinerary,
    //         createdAt: serverTimestamp(),
    //         updatedAt: serverTimestamp(),
    //       }
    //     );
    //     this.tripId = ref.id;
    //     this.startRealtime(); // Start listening
    //   } else {
    //     // If dates changed on an existing trip, save it
    //     console.log("Dates changed, saving existing trip...");
    //     this.saveItinerary();
    //   }
    // },


    async saveItinerary() {
      if (!this.currentUser || !this.tripId) return;
      this.isSaving = true;

      try {
        // Use updateDoc instead of setDoc
        await updateDoc( // <-- CHANGED
          doc(db, "users", this.currentUser.uid, "itineraries", this.tripId),
          {
            // The data is the same
            title: this.dateRangeDisplay || "Trip",
            startDate: this.startDateInput,
            endDate: this.endDateInput,
            dailyItinerary: this.dailyItinerary,
            updatedAt: serverTimestamp(),
          }
          // No { merge: true } needed!
        );
        this.lastSavedAt = Date.now();
        console.log("Save successful!");
      } catch (error) {
        console.error("Error saving itinerary:", error);
      } finally {
        this.isSaving = false;
      }
    },




    async loadItinerary(tripId) {
      if (!this.currentUser) return;
      console.log(`Loading itinerary for trip: ${tripId}`);
      const snap = await getDoc(
        doc(db, "users", this.currentUser.uid, "itineraries", tripId)
      );
      if (snap.exists()) {
        const data = snap.data();
        this.tripId = tripId;
        this.startDateInput = data.startDate || "";
        this.endDateInput = data.endDate || "";
        this.dailyItinerary = data.dailyItinerary || {};

        const keys = Object.keys(this.dailyItinerary).sort();
        const first = keys[0];
        const last = keys[keys.length - 1];

        if (first) {
          this.setActiveDay(first);
          this.dateRangeDisplay = this.formatDateRangeDisplay(first, last);
        } else {
          this.dateRangeDisplay = 'No Dates Set';
        }

        this.updateItineraryList();
        this.$nextTick(() => this.renderRoute());
      } else {
        console.error(`Itinerary with ID ${tripId} not found.`);
        // Handle error: maybe redirect or load latest
        this.tripId = null;
        this.dailyItinerary = {};
        await this.loadLatestItinerary(); // Try to load last one
      }
    },


    // In your 'methods: { ... }' object

    setActiveDay(date) {
  // 1. Set the active date
  this.activeDate = date;

  // 2. Loop through all days to collapse/expand
  Object.keys(this.dailyItinerary).forEach(dayKey => {
    if (dayKey === date) {
      // This is the active day, expand it
      this.dailyItinerary[dayKey].isExpanded = true;
    } else {
      // This is an inactive day, collapse it
      this.dailyItinerary[dayKey].isExpanded = false;
    }
  });

  // 3. Clear the map and render the route for the active day
  this.$nextTick(() => {
    this.renderRoute();
  });
},

    // *** NEW: DELETE DAY METHODS ***
    showDeleteDayConfirm(date) {
      this.dateToDelete = date;
      this.showDeleteConfirmModal = true;
    },

    // async deleteDay() {
    //   if (!this.dateToDelete) return;

    //   const date = this.dateToDelete;

    //   // Create a new object *without* the deleted day's key
    //   // This is the correct way to ensure Vue's reactivity
    //   const newDailyItinerary = { ...this.dailyItinerary };
    //   delete newDailyItinerary[date];

    //   this.dailyItinerary = newDailyItinerary;

    //   // Reset the modal
    //   this.dateToDelete = null;
    //   this.showDeleteConfirmModal = false;

    //   // Update the helper list
    //   this.updateItineraryList();

    //   // Check if the active date was the one deleted, and if so, pick a new one
    //   this.ensureValidActiveDate();

    //   //
    //   // --- THIS IS THE FIX ---
    //   //
    //   // Now, save this new state (with the day removed) to Firebase.
    //   try {
    //     await this.saveItinerary();
    //     console.log("Day deleted and itinerary saved.");
    //   } catch (error) {
    //     console.error("Error saving after day deletion:", error);
    //   }
    // },

    async deleteDay() {
      if (!this.dateToDelete) return;

      const date = this.dateToDelete;

      // 1. Create a new object without the deleted day
      const newDailyItinerary = { ...this.dailyItinerary };
      delete newDailyItinerary[date];

      // 2. Set the local state
      this.dailyItinerary = newDailyItinerary;

      // 3. Reset the modal
      this.dateToDelete = null;
      this.showDeleteConfirmModal = false;

      // 4. Update UI helpers
      this.updateItineraryList();
      this.ensureValidActiveDate();

      // 5. Save this new state to Firebase
      // (This will now work because saveItinerary uses updateDoc)
      try {
        await this.saveItinerary();
        console.log("Day deleted and itinerary saved.");
      } catch (error) {
        console.error("Error saving after day deletion:", error);
      }
    },


    // async deleteDay() {
    //   if (!this.dateToDelete) return;

    //   this.isUpdatingLocally = true; // <-- SET FLAG: "Don't listen!"

    //   try {
    //     const date = this.dateToDelete;

    //     // Create a new object *without* the deleted day's key
    //     const newDailyItinerary = { ...this.dailyItinerary };
    //     delete newDailyItinerary[date];

    //     this.dailyItinerary = newDailyItinerary;

    //     // Reset the modal
    //     this.dateToDelete = null;
    //     this.showDeleteConfirmModal = false;

    //     // Update the helper list
    //     this.updateItineraryList();

    //     // Check if the active date was the one deleted
    //     this.ensureValidActiveDate();

    //     // Now, save this new state to Firebase.
    //     await this.saveItinerary();
    //     console.log("Day deleted and itinerary saved.");

    //   } catch (error) {
    //     console.error("Error saving after day deletion:", error);

    //   } finally {
    //     // --- THIS IS CRITICAL ---
    //     // No matter what happens, turn the listener back on
    //     // after a tiny delay to let the final save come through.
    //     setTimeout(() => {
    //       this.isUpdatingLocally = false; // <-- UNSET FLAG: "Ok, listen again."
    //     }, 100); 
    //   }
    // },


    // deleteDay() {
    //   if (!this.dateToDelete) return;



    //   const date = this.dateToDelete;

    //   // Create a new object *without* the deleted day's key
    //   // This is the correct way to ensure Vue's reactivity
    //   const newDailyItinerary = { ...this.dailyItinerary };
    //   delete newDailyItinerary[date];

    //   this.dailyItinerary = newDailyItinerary;

    //   // Reset the modal
    //   this.dateToDelete = null;
    //   this.showDeleteConfirmModal = false;

    //   // Update the helper list
    //   this.updateItineraryList();

    //   // Check if the active date was the one deleted, and if so, pick a new one
    //   this.ensureValidActiveDate();
    // },


    getActivityDateString(dateStr) {
      // dateStr is "Sun, 19 Nov • 7:30 PM"
      try {
        let datePart = dateStr.split('•')[0].trim(); // "Sun, 19 Nov"
        datePart = datePart.replace(/^\w+,\s*/, '');  // "19 Nov"

        // Get the year from the itinerary.
        let year;
        if (Object.keys(this.dailyItinerary).length > 0) {
          // Get the year from the itinerary date (e.g., "2025-11-19")
          year = Object.keys(this.dailyItinerary)[0].split('-')[0];
        } else {
          year = new Date().getFullYear(); // Fallback
        }

        // --- THIS IS THE FIX ---
        // We force the date to be parsed as UTC by appending "00:00:00 UTC"
        // This makes it "19 Nov 2025 00:00:00 UTC"
        const dateObj = new Date(`${datePart} ${year} 00:00:00 UTC`);

        if (isNaN(dateObj)) return null;

        // .toISOString() will now be correct, as the date is already in UTC
        // e.g., "2025-11-19T00:00:00Z"
        return dateObj.toISOString().split('T')[0]; // Returns "2025-11-19"

      } catch (e) {
        console.error("Error parsing activity date:", e);
        return null;
      }
    },

    async loadFavourites() {
      if (!this.currentUser) return;
      this.isLoadingActivities = true;
      try {
        const userDoc = await getDoc(doc(db, "users", this.currentUser.uid));
        this.activities = userDoc.exists() ? userDoc.data().favouritesList || [] : [];

        // That's it! We just get the data.
        // All the code related to 'this.calendar.addEvent' is removed.

      } catch (error) {
        console.error("Error loading favourites:", error);
        this.activities = []; // Clear on error
      } finally {
        this.isLoadingActivities = false;
      }
    },

    onCharacterDragEnd(event) {
      const droppedPosition = event.latLng;

      // 1. Check if Street View data exists at this location
      this.streetViewService.getPanorama({
        location: droppedPosition,
        radius: 50 // search within a 50 meter radius
      }, (data, status) => {

        if (status === 'OK') {
          // Street View data found!
          this.activateStreetView(data.location.latLng);
        } else {
          // Street View data not found
          console.error("No Street View data available at this location.");
          alert("No Street View available near that spot.");

          // Return the marker to the map center or previous position
          this.characterMarker.setPosition(this.map.getCenter());
        }
      });
    },

    activateStreetView(position) {
      // Set the state to show the panorama container
      this.isStreetViewActive = true;

      // Use Vue's nextTick to ensure the panorama div is in the DOM
      this.$nextTick(() => {
        const panoElement = document.getElementById('street-view-panorama');

        // 1. Initialize the panorama viewer object 
        this.panorama = new google.maps.StreetViewPanorama(panoElement, {
          position: position,
          pov: { heading: 270, pitch: 0 }, // Point of View settings
          visible: true
        });

        // 2. Link the panorama to the main map (optional, but standard)
        this.map.setStreetView(this.panorama);

        // Optionally, hide the character marker while in street view
        this.characterMarker.setMap(null);
      });
    },

    // NEW: Method to exit Street View
    exitStreetView() {
      this.isStreetViewActive = false;
      this.map.setStreetView(null); // Unlink panorama from the map
      this.characterMarker.setMap(this.map); // Show the marker again
    },

    // [NEW METHOD] Initializes the draggable character/Pegman marker
    initCharacterMarker() {
      // CRITICAL: Ensure the map object exists before proceeding
      if (!this.map) {
        console.error("Map not yet initialized. Cannot create character marker.");
        return;
      }

      const iconStand = {
        url: 'https://images.fandango.com/cms/assets/553523f0-1e37-11e7-a08e-6772f9d3dc37--groot.gif',
        scaledSize: new google.maps.Size(60, 60),
        anchor: new google.maps.Point(30, 60)
      };

      const iconWalk = {
        url: 'https://media0.giphy.com/media/2UvBsxeB6nlONSJYoh/giphy.gif?cid=a267dfa31en1q4aae9wvv4d6dolxml8twhj83ch5h39ws2v1&rid=giphy.gif',
        scaledSize: new google.maps.Size(80, 80),
        anchor: new google.maps.Point(30, 80)
      };

      const startPosition = { lat: 1.3521, lng: 103.8198 };

      this.characterMarker = new google.maps.Marker({
        position: startPosition,
        map: this.map,
        title: 'Your Character',
        draggable: true,
        icon: iconStand,
        zIndex: 999
      });

      // --- Add listeners to swap GIFs ---
      this.characterMarker.addListener('dragstart', () => {
        this.characterMarker.setIcon(iconWalk);
      });

      this.characterMarker.addListener('dragend', (event) => {
        this.characterMarker.setIcon(iconStand);
        // This is your existing dragend logic
        this.onCharacterDragEnd(event);
      });

      // this.characterMarker.addListener('dragend', this.onCharacterDragEnd);
    },

    async initMap() {
      await nextTick();

      this.map = new google.maps.Map(document.getElementById('google-map'), {
        center: { lat: 1.3521, lng: 103.8198 }, // Centered on Singapore
        zoom: 11,
        disableDefaultUI: true,
        zoomControl: true,

        restriction: {
          latLngBounds: {
            north: 1.5,     // Approximate NE latitude
            south: 1.1,     // Approximate SW latitude
            east: 104.1,    // Approximate NE longitude
            west: 103.5     // Approximate SW longitude
          },
          // Prevents panning outside the box
        },
      });

      this.geocoder = new google.maps.Geocoder();

      // NEW: Initialize Directions Services
      this.directionsService = new google.maps.DirectionsService();
      // Suppress markers since we are drawing custom numbered markers
      this.directionsRenderer = new google.maps.DirectionsRenderer({
        map: this.map,
        suppressMarkers: true,
        polylineOptions: {
          strokeColor: '#3f51b5', // Primary Blue
          strokeOpacity: 0.8,
          strokeWeight: 4
        }
      });
      this.streetViewService = new google.maps.StreetViewService();

      // Initialize the draggable character/pegman
      this.initCharacterMarker();
    },

    initAutocomplete(elementId) {
      const input = document.getElementById(elementId);
      if (input && window.google) {
        // Clear previous listeners to prevent multiple triggers
        if (this.autocomplete) {
          google.maps.event.clearInstanceListeners(this.autocomplete);
        }

        this.autocomplete = new google.maps.places.Autocomplete(input, {
          componentRestrictions: { country: 'sg' }, // Restrict search to Singapore
          fields: ['name', 'formatted_address', 'geometry', 'place_id', 'website', 'rating', 'user_ratings_total', 'photos'],
        });
        this.autocomplete.addListener('place_changed', this.onPlaceSelected);
      }
    },

    // Validation for Start/End Dates
    validateDates() {
      if (this.startDateInput && this.endDateInput) {
        // Using new Date() on YYYY-MM-DD strings defaults to midnight UTC, which is safer.
        const start = new Date(this.startDateInput);
        const end = new Date(this.endDateInput);

        if (start > end) {
          this.dateError = "End date cannot be before start date.";
        } else {
          this.dateError = "";
        }
      } else {
        this.dateError = "";
      }
    },

    onPlaceSelected() {
      const place = this.autocomplete.getPlace();
      if (!place.geometry) {
        console.error("Returned place contains no geometry");
        return;
      }

      this.addPlacePrompt = false;
      this.displayPlaceOnMap(place);
    },

    displayPlaceOnMap(place) {
      this.map.setCenter(place.geometry.location);
      this.map.setZoom(15);

      if (this.marker) {
        this.marker.setMap(null);
        this.marker = null; // <--- Ensure it's explicitly nullified here too
      }
      this.marker = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location,
        animation: google.maps.Animation.DROP,
      });

      this.selectedPlace = {
        place_id: place.place_id,
        name: place.name,
        address: place.formatted_address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        website: place.website || '#',
        rating: place.rating || 'N/A',
        user_ratings_total: place.user_ratings_total || 0,
        description: 'A brief description of this location (e.g., historical site, restaurant, park).',
        photoUrl: place.photos && place.photos.length > 0
          ? place.photos[0].getUrl({ maxWidth: 200, maxHeight: 100 })
          : 'https://placehold.co/200x100/A0A0A0/FFFFFF?text=No+Image',
      };

      this.selectedDateToAdd = this.selectedDate || Object.keys(this.dailyItinerary)[0];
    },

    // Ensures all place data is saved with the itinerary item
    addToItinerary() {
      if (this.selectedPlace && this.selectedDateToAdd) {
        const dateKey = this.selectedDateToAdd;

        const place = {
          place_id: this.selectedPlace.place_id,
          name: this.selectedPlace.name,
          address: this.selectedPlace.address,
          lat: this.selectedPlace.lat,
          lng: this.selectedPlace.lng,
          website: this.selectedPlace.website,
          rating: this.selectedPlace.rating,
          user_ratings_total: this.selectedPlace.user_ratings_total,
          description: this.selectedPlace.description,
          photoUrl: this.selectedPlace.photoUrl,
          // NEW: Properties to be updated by Directions API
          distance: null,
          duration: null,
        };

        const updatedPlaces = [...this.dailyItinerary[dateKey].places, place];

        this.dailyItinerary = {
          ...this.dailyItinerary,
          [dateKey]: {
            ...this.dailyItinerary[dateKey],
            places: updatedPlaces
          }
        };

        this.selectedPlace = null;
        if (this.marker) {
          this.marker.setMap(null);
          this.marker = null;
        }
        this.updateItineraryList();
        this.renderRoute();
        // this.scheduleSave(); // Removed for manual save
      }
    },

    cloneActivity(activity) {
      // Create the new object. Note: NO lat/lng yet.
      return {
        place_id: activity.id || new Date().getTime(),
        name: activity.title,
        address: activity.location || activity.address, // or activity.address
        originalDateStr: activity.date,
        description: activity.description || 'Saved activity.',
        photoUrl: activity.image || 'https://placehold.co/200x100',
        website: activity.website || '#',
        rating: activity.rating || 'N/A',
        user_ratings_total: activity.user_ratings_total || 0,
        lat: null, // Will be filled by geocoder
        lng: null, // Will be filled by geocoder
        isGeocoding: true // Flag to show it's new
      };
    },

    /**
     * (Asynchronous) Called by Vue.Draggable AFTER a new item
     * is dropped into an itinerary list.
     * We find this new item and geocode it.
     */
    async onActivityAdded(event, date) {
      // Get the index and the item that was just added
      const newIndex = event.newIndex;
      const newPlace = this.dailyItinerary[date].places[newIndex];


      // --- 1. DATE CHECK (NEW) ---
      const activityDate = this.getActivityDateString(newPlace.originalDateStr);
      const itineraryDate = date; // This is already "YYYY-MM-DD"

      // Check if we have a valid activity date AND if it matches the itinerary day
      if (activityDate && activityDate !== itineraryDate) {
        alert(`This activity is for ${activityDate}, but you are trying to add it to ${itineraryDate}.`);
        // Remove the item
        this.dailyItinerary[date].places.splice(newIndex, 1);
        return; // Stop the function
      }
      // --- END DATE CHECK ---

      // --- 1. DUPLICATE CHECK ---
      // Look through the list to see if any OTHER item
      // has the same place_id.
      const isDuplicate = this.dailyItinerary[date].places.some(
        (place, index) => {
          return place.place_id === newPlace.place_id && index !== newIndex;
        }
      );

      if (isDuplicate) {
        alert("This item is already in your itinerary for this day.");
        // If it's a duplicate, remove the item that was just added
        this.dailyItinerary[date].places.splice(newIndex, 1);
        return; // Stop the function
      }
      // Get the index of the newly added item
      const place = newPlace; // just for clarity

      if (place && place.isGeocoding && place.address) {
        console.log("Geocoding new item:", place.name);
        try {
          if (!this.geocoder) { throw new Error("Geocoder not ready."); }

          const geocodeResult = await this.geocoder.geocode({ 'address': place.address });
          if (geocodeResult.results && geocodeResult.results.length > 0) {
            const location = geocodeResult.results[0].geometry.location;

            // Mutate the object in the array
            place.lat = location.lat();
            place.lng = location.lng();
            place.isGeocoding = false; // Mark as done

            console.log("Geocoding complete:", place.lat, place.lng);
          } else {
            throw new Error("Geocoding failed: No results found.");
          }
        } catch (e) {
          console.error("Failed to geocode dropped item:", e);
          alert(`Could not find location for ${place.name}. Please remove it.`);
        }

        // Call renderRoute to update the map
        this.renderRoute();
        // this.scheduleSave(); // Removed for manual save
      }
    },

    /**
     * Called by Vue.Draggable at the END of any drag operation
     * (reordering OR adding). We just update the map.
     */
    onDragEnd() {
  // Force re-render after drag to update pin numbers
  this.$nextTick(() => {
    // Clear existing markers first
    this.currentMarkers.forEach(m => m.setMap(null));
    this.currentMarkers = [];
    
    // Then render the route with new order
    this.renderRoute();
  });
},


    async removePlace(date, index) {
      const updatedPlaces = this.dailyItinerary[date].places.filter((_, i) => i !== index);

      this.dailyItinerary = {
        ...this.dailyItinerary,
        [date]: {
          ...this.dailyItinerary[date],
          places: updatedPlaces
        }
      };

      this.updateItineraryList();
      this.$nextTick(() => {
        this.renderRoute();
      });

      // --- THIS IS THE FIX ---
      // Save the change to Firebase
      try {
        await this.saveItinerary();
        console.log("Place removed and itinerary saved.");
      } catch (error) {
        console.error("Error saving after place removal:", error);
      }
    },


    // removePlace(date, index) {
    //   const updatedPlaces = this.dailyItinerary[date].places.filter((_, i) => i !== index);

    //   this.dailyItinerary = {
    //     ...this.dailyItinerary,
    //     [date]: {
    //       ...this.dailyItinerary[date],
    //       places: updatedPlaces
    //     }
    //   };

    //   this.updateItineraryList();
    //   this.$nextTick(() => {
    //     this.renderRoute();
    //   });

    //   // this.scheduleSave(); // Removed for manual save

    // },

   toggleDay(date) {
  const wasExpanded = this.dailyItinerary[date].isExpanded;
  
  // Toggle the expansion state
  this.dailyItinerary[date].isExpanded = !wasExpanded;

  // If we just expanded this day, make it the active day and render its route
  if (!wasExpanded) {
    this.activeDate = date;
    // Collapse all other days
    Object.keys(this.dailyItinerary).forEach(dayKey => {
      if (dayKey !== date) {
        this.dailyItinerary[dayKey].isExpanded = false;
      }
    });
    this.$nextTick(() => {
      this.renderRoute();
    });
  } else {
    // If we just collapsed this day, clear the map completely
    this.activeDate = null;
    
    // Use the dedicated clear method
    this.clearMapCompletely();
  }
},
clearMapCompletely() {
  console.log('clearMapCompletely called');
  
  // Clear all numbered location markers
  if (this.currentMarkers && this.currentMarkers.length > 0) {
    console.log('Clearing', this.currentMarkers.length, 'markers');
    this.currentMarkers.forEach((marker, index) => {
      console.log('Removing marker', index, 'position:', marker.getPosition()?.toString());
      if (marker) {
        marker.setMap(null); // Remove from map
        marker.setVisible(false); // Make invisible
      }
    });
    this.currentMarkers.length = 0; // Clear array differently
    this.currentMarkers = []; // Also reassign
    console.log('All markers cleared. currentMarkers length:', this.currentMarkers.length);
  } else {
    console.log('No markers to clear');
  }
  
  // Clear the route line
  if (this.directionsRenderer) {
    this.directionsRenderer.set('directions', null);
    this.directionsRenderer.setMap(null);
    this.directionsRenderer.setMap(this.map);
    console.log('Route cleared');
  }
  
  // Clear search marker
  if (this.marker) {
    this.marker.setMap(null);
    this.marker.setVisible(false);
    this.marker = null;
    console.log('Search marker cleared');
  }
  
  console.log('clearMapCompletely finished');
},

    updateItineraryList() {
      this.itinerary = Object.values(this.dailyItinerary).flatMap(day => day.places);
    },

    // REPLACE your entire renderRoute function with this one:
    renderRoute() {
  // 1. --- CLEAR THE MAP COMPLETELY ---
  console.log('Clearing map. Current markers count:', this.currentMarkers.length);
  
  // Clear search marker
  if (this.marker) {
    this.marker.setMap(null);
    this.marker = null;
  }
  
  // Clear ALL numbered location markers
  if (this.currentMarkers && this.currentMarkers.length > 0) {
    this.currentMarkers.forEach(m => {
      if (m && m.setMap) {
        m.setMap(null);
      }
    });
    this.currentMarkers = [];
  }
  
  // Clear the route line
  if (this.directionsRenderer) {
    this.directionsRenderer.setDirections({ routes: [] });
  }

  // 2. --- FIND THE *ACTIVE* DAY --- 
  if (!this.activeDate || !this.dailyItinerary[this.activeDate]) {
    console.log('No active day to render. Map is clean.');
    return;
  }

  console.log('Rendering route for active date:', this.activeDate);

      const date = this.activeDate;
      const places = this.dailyItinerary[date].places;

      if (places.length === 0) {
        console.log('Active day has no places. Map is clean.');
        return;
      }

      // 3. --- DRAW ALL PINS FOR THE ACTIVE DAY ---
places.forEach((place, index) => {
  // Check if place has valid coordinates
  if (!place.lat || !place.lng) {
    console.warn(`Skipping marker for "${place.name}" - missing coordinates.`);
    return; // Skip this pin
  }

  const marker = new google.maps.Marker({
    position: { lat: place.lat, lng: place.lng },
    map: null, // Don't set map yet
    label: {
      text: `${index + 1}`,
      color: 'white',
      fontWeight: 'bold'
    },
    title: place.name,
  });
  
  // Explicitly set the map
  marker.setMap(this.map);
  
  this.currentMarkers.push(marker);
  console.log('Created marker', index + 1, 'at', place.name);
});

      // 4. --- DRAW THE ROUTE FOR THE ACTIVE DAY ---
      if (places.length < 2) return;

      // Filter out any places that failed geocoding
      const validPlaces = places.filter(p => p.lat && p.lng);
      if (validPlaces.length < 2) return;

      const origin = validPlaces[0];
      const destination = validPlaces[validPlaces.length - 1];
      const waypoints = validPlaces.slice(1, -1).map(p => ({
        location: { lat: p.lat, lng: p.lng },
        stopover: true
      }));

      // ✅ This is the missing directionsService call
      this.directionsService.route({
        origin: { lat: origin.lat, lng: origin.lng },
        destination: { lat: destination.lat, lng: destination.lng },
        waypoints: waypoints,
        optimizeWaypoints: false,
        travelMode: google.maps.TravelMode.DRIVING
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsRenderer.setDirections(response);
          this.updateRouteInfo(response.routes[0].legs, date); // Pass 'date'
          this.map.fitBounds(response.routes[0].bounds);
        } else {
          console.error('Directions request failed due to ' + status);
          this.clearRouteInfo(date, places); // Pass 'date'
        }
      });
    },

    // Updates the distance and duration in the itinerary list
    updateRouteInfo(legs, date) {
      // Find a reference to the places array for the correct date
      if (!this.dailyItinerary[date]) return;
      const placesForDate = this.dailyItinerary[date].places;

      // Create a new array from the places to avoid mutation issues
      const updatedPlaces = [...placesForDate];

      // The first place has no distance/duration from previous, so we start at index 1
      if (updatedPlaces.length > 0) {
        updatedPlaces[0].distance = null;
        updatedPlaces[0].duration = null;
      }

      // We must account for places that were skipped by the directions service (if geocoding failed)
      // We'll match by lat/lng
      let legIndex = 0;
      for (let i = 1; i < updatedPlaces.length; i++) {
        const place = updatedPlaces[i];

        // If this place has valid coords, it should correspond to the next leg
        if (place.lat && place.lng && legs[legIndex]) {
          place.distance = legs[legIndex].distance.text;
          place.duration = legs[legIndex].duration.text;
          legIndex++; // Move to the next leg
        } else {
          // This place was skipped (no coords), so it has no route info
          place.distance = null;
          place.duration = null;
        }
      }

      // Ensure reactivity by replacing the day object
      this.dailyItinerary = {
        ...this.dailyItinerary,
        [date]: {
          ...this.dailyItinerary[date],
          places: updatedPlaces
        }
      };
      // this.scheduleSave(); // Removed for manual save
    },

    // Fallback to clear route info on error
    clearRouteInfo(date, places) {
      if (!this.dailyItinerary[date]) return;

      const updatedPlaces = places.map(p => ({ ...p, distance: null, duration: null }));
      this.dailyItinerary = {
        ...this.dailyItinerary,
        [date]: {
          ...this.dailyItinerary[date],
          places: updatedPlaces
        }
      };
    },

    getDirectionsUrl(origin, destination) {
      const originStr = `${origin.lat},${origin.lng}`;
      const destStr = `${destination.lat},${destination.lng}`;
      return `https://www.google.com/maps/dir/?api=1&origin=${originStr}&destination=${destStr}&travelmode=driving`;
    },


    // --- Formatting Helpers ---
    formatDay(dateStr) {
      if (!dateStr) return "Invalid Date";
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      return new Date(dateStr + 'T00:00:00Z').toLocaleDateString('en-US', options);
    },


    formatDateRangeDisplay(startStr, endStr) {
      // guard
      if (!startStr && !endStr) return 'No Dates Set';
      const start = startStr || endStr;
      const end = endStr || startStr;

      const parse = (s) => new Date(s + 'T00:00:00Z'); // avoid TZ issues
      const fmt = (s) => {
        const d = parse(s);
        return `${d.getDate()}/${d.getMonth() + 1}`;
      };

      const dayMs = 24 * 60 * 60 * 1000;
      const diff = Math.round((parse(end).getTime() - parse(start).getTime()) / dayMs);

      if (diff === 0) return fmt(start);
      // Use toLocaleDateString for better formatting
      const startFmt = parse(start).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const endFmt = parse(end).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

      return `${startFmt} - ${endFmt}`;
    },

  }, // End of Methods


  watch: {
    // Watch for the modal opening to initialize Autocomplete
    addPlacePrompt(isOpen) {
      if (isOpen) {
        nextTick(() => {
          this.initAutocomplete('place-search-input');
        });
      }
    }
  },

};
</script>

<style scoped>
/* Note: Tailwind CSS is not loaded, relying on standard Bootstrap-like utility classes and custom CSS */

/* --- Layout --- */

.sidebar-save-bar {
  position: sticky;
  bottom: 0;
  /* Make sure sidebar has padding-bottom > this height */
  background: #f7f9fc;
  padding: 12px 0;
  border-top: 1px solid #e0e0e0;
  margin: 0 -20px;
  /* Stretch to edges of sidebar padding */
  padding: 12px 20px;
  /* Add padding back inside */
}


/* Add this to your <style scoped> */
.day-header.active-day {
  background-color: #e3f2fd;
  /* A light blue background */
  border-left: 4px solid #3f51b5;
  /* A strong accent border */
  color: #3f51b5;
}

/* *** UPDATED/NEW STYLES FOR DELETE BUTTON *** */
.day-header i {
  /* Make the chevron clickable without the whole header */
  padding: 5px;
  margin-right: 0;
  /* Removed old margin */
  cursor: pointer;
}

.day-header-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  /* Adds space between the delete button and chevron */
}

/* .btn-delete-day {
  background: none;
  border: none;
  color: #dc3545; /* Bootstrap danger red 
  /* padding: 5px; 
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;
  line-height: 1; /* Aligns icon 
}

.btn-delete-day:hover {
  opacity: 1;
} */
/* *** END NEW STYLES *** */


#itinerary-planner {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Style to make the Street View overlay cover the entire map container */
#street-view-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  /* Above the regular map (z-index 10 is enough for map) */
}

#street-view-panorama {
  width: 100%;
  height: 100%;
}

.exit-pano-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 101;
  /* Above the panorama itself */
}

/* --- Layout --- */

.itinerary-split-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 60px);
}

.itinerary-sidebar {
  padding: 20px;
  background-color: #fff;
  overflow-y: auto;
  padding-bottom: 100px;
  position: relative;
}

/* On medium screens and up, remove bottom padding and make cards equal height */
@media (min-width: 768px) {
  .itinerary-sidebar {
    padding-bottom: 100px;
    max-height: 70vh;
  }

  .activities-scrollable {
    max-height: calc(70vh - 120px);
    overflow-y: auto;
  }

  /* Saved Activities Card - Pop-up window styling */
  .col-12.col-md-6.order-2 {
    background-color: #fff;
  }

  .col-12.col-md-6.order-2 .card {
    margin: 20px;
    max-height: 70vh;
    /* height: 500px; */

    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border: 1px solid #e0e0e0;
  }

  @media (min-width: 768px) {
    .col-12.col-md-6.order-2 .card {
      position: static;
      top: 20px;
      max-width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 767px) {
    .col-12.col-md-6.order-2 .card {
      margin: 10px;
    }
  }
}

/* On small screens, make sidebars scrollable but not too tall */
@media (max-width: 767px) {
  .itinerary-sidebar {
    max-height: 60vh;
  }

  .activities-scrollable {
    max-height: 50vh;
    overflow-y: auto;
  }
}

.map-container {
  position: relative;
  width: 100%;
  min-height: 500px;
  height: 100%;
}

/* On medium screens and up, map takes remaining vertical space */
@media (min-width: 768px) {
  .map-container {
    height: 30vh;
    min-height: 400px;
  }
}

/* On small screens, map gets a fixed comfortable height */
@media (max-width: 767px) {
  .map-container {
    height: 50vh;
    min-height: 300px;
  }
}

.sidebar-save-bar {
  position: sticky;
  bottom: 0;
  background: #f7f9fc;
  padding: 12px 0;
  border-top: 1px solid #e0e0e0;
  margin: 0 -20px;
  padding: 12px 20px;
  z-index: 5;
}

.day-header.active-day {
  background-color: #e3f2fd;
  border-left: 4px solid #3f51b5;
  color: #3f51b5;
}

.day-header i {
  padding: 5px;
  margin-right: 0;
  cursor: pointer;
}

.day-header-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

#itinerary-planner {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#street-view-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

#street-view-panorama {
  width: 100%;
  height: 100%;
}

.exit-pano-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 101;
}

#google-map {
  width: 100%;
  height: 100%;
}

/* --- Itinerary Items (The place row structure) --- */
.itinerary-item {
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  transition: all 0.2s;
}

.itinerary-item:active {
  background-color: #f0f0f0;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2) !important;
}

.index-circle {
  width: 34px;
  height: 34px;
  background-color: #3f51b5;
  /* Primary Blue Accent */
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  flex-shrink: 0;
}

.place-thumbnail {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.drag-icon {
  width: 20px;
  height: 20px;
  align-self: center;
  object-fit: contain;
}

.description-text {
  font-size: 0.9rem;
  color: #495057;
  margin-top: 5px;
  line-height: 1.3;
}

.website-link {
  font-size: 0.85rem;
}

/* Updated to show Distance and Duration */
.route-info {
  font-size: 0.9em;
  color: #6c757d;
  font-weight: 500;
}

.directions-btn {
  color: #3f51b5;
  font-weight: 600;
  font-size: 0.85rem;
}

/* NEW: Compact control buttons styling */
.control-group .btn {
  border-radius: 6px;
  transition: background-color 0.15s;
  line-height: 1;
}

.control-group .btn-light {
  border: 1px solid #ccc;
}

.control-group .btn-light:hover:not(:disabled) {
  background-color: #e9ecef;
}

.control-group .btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}


.move-btn:disabled {
  opacity: 0.3;
}

/* --- Map Popups --- */
.place-info-popup {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 400px;
  max-width: 90%;
  background: white;
  border-radius: 12px;
  z-index: 10;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.place-photo {
  max-height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
  z-index: 11;
  color: #666;
}

/* --- Other UI Elements --- */
.day-header {
  cursor: pointer;
  background: #ffffff;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.25rem;
  font-weight: 600;
  color: #3f51b5;
  border: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.15s;
}

.day-header:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.add-place-btn {
  border-radius: 8px;
  border: 2px dashed #90caf9;
  color: #3f51b5;
  transition: background-color 0.15s;
}

.add-place-btn:hover {
  background-color: #e3f2fd;
  color: #3f51b5;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 550px;
}
</style>