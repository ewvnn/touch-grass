<template>
  <div id="itinerary-planner">

    <!-- Layout is now always the split view, regardless of itinerary length -->
    <div class="itinerary-split-view container-fluid">

      <div class="itinerary-sidebar">
        <h2>Itinerary</h2>

        <!-- NEW: Empty State Prompt (show if no dates are set) -->
        <div v-if="Object.keys(dailyItinerary).length === 0" class="empty-state-prompt p-5 text-center">
          <p class="mb-4 text-secondary fs-5">Nothing's planned yet. Let's get started!</p>
          <button @click="showDateSelectionModal = true" class="btn btn-lg rounded-pill px-4 py-3 shadow-sm text-white bg-success">
            <i class="fas fa-calendar-alt me-2"></i> Add trip dates
          </button>
        </div>

        <!-- Existing Itinerary Content (show only if dates are set) -->
        <div v-else>
          <div class="date-range mb-4 fw-bold text-end text-primary">
            <button @click="showDateSelectionModal = true" class="btn btn-sm btn-outline-primary me-2">
              <i class="fas fa-calendar-edit"></i> Edit Dates
            </button>
            {{ dateRangeDisplay }}
          </div>
          
          <div v-for="date in Object.keys(dailyItinerary)" :key="date" class="itinerary-day-section">
            <h3 @click="toggleDay(date)" class="day-header">
              {{ formatDay(date) }}
              <!-- Dropdown indicator based on isExpanded -->
              <i :class="['fas', dailyItinerary[date].isExpanded ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
            </h3>
            <!-- Content is shown/hidden based on isExpanded -->
            <div v-show="dailyItinerary[date].isExpanded" class="place-list">

              <!-- STANDARD V-FOR FOR PLACES -->
              <div v-for="(place, index) in dailyItinerary[date].places" :key="place.place_id"
                class="list-group-item d-flex align-items-start mb-3 p-3 itinerary-item shadow-sm">
                <div class="index-circle">{{ index + 1 }}</div>

                <div class="place-details flex-grow-1 ms-3">
                  <h5 class="mb-1">{{ place.name }}</h5>

                  <!-- Detailed Place Information -->
                  <div class="d-flex align-items-center mb-2">
                    <img :src="place.photoUrl" class="place-thumbnail me-2" :alt="place.name" />
                    <div>
                      <small class="text-muted d-block"><i class="fas fa-map-marker-alt"></i> {{ place.address
                      }}</small>
                      <small class="text-warning fw-bold d-block"><i class="fas fa-star"></i> {{ place.rating }} ({{
                        place.user_ratings_total }})</small>
                      <a :href="place.website" target="_blank" class="website-link d-block"><i class="fas fa-link"></i>
                        Website: {{ place.name }}</a>
                    </div>
                  </div>

                  <p class="description-text mb-2">{{ place.description }}</p>

                  <!-- UPDATED: Route info showing distance and duration from previous stop -->
                  <div v-if="index > 0 && place.distance"
                    class="route-info d-flex align-items-center mt-2 pt-2 border-top">
                    <span class="distance-text me-3"><i class="fas fa-route"></i> {{ place.distance }} ({{
                      place.duration }})</span>
                    <a :href="getDirectionsUrl(dailyItinerary[date].places[index - 1], place)" target="_blank"
                      class="btn btn-sm btn-link p-0 directions-btn">Open in Maps</a>
                  </div>
                </div>

                <!-- UPDATED: Compact Horizontal Control Group (Fix for visibility) -->
                <div class="d-flex align-items-center flex-shrink-0 ms-2 control-group">

                  <!-- Move Up Button (Disabled if it's the first item) -->
                  <button @click="movePlaceUp(date, index)" :disabled="index === 0"
                    class="btn btn-sm btn-light p-1 me-1 move-btn" title="Move up">
                    <i class="fas fa-arrow-up"></i>
                  </button>

                  <!-- Move Down Button (Disabled if it's the last item) -->
                  <button @click="movePlaceDown(date, index)"
                    :disabled="index === dailyItinerary[date].places.length - 1"
                    class="btn btn-sm btn-light p-1 me-1 move-btn" title="Move down">
                    <i class="fas fa-arrow-down"></i>
                  </button>

                  <!-- Remove Button -->
                  <button @click="removePlace(date, index)" class="btn btn-sm btn-outline-danger p-1"
                    title="Remove place">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>

              <!-- Add Place Button -->
              <button @click="addPlacePrompt = true; selectedDate = date"
                class="btn btn-block btn-outline-secondary mt-3 add-place-btn">
                <i class="fas fa-plus"></i> Add a place
              </button>
            </div>
            <hr />
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

      

      <!-- Map Container (Always 60% of width now) -->
      <div class="map-container">
        <div id="google-map"></div>

        <div v-if="isStreetViewActive" id="street-view-overlay">
          <div id="street-view-panorama"></div>
          <button @click="exitStreetView" class="btn btn-secondary exit-pano-btn">
            <i class="fas fa-times"></i> Exit Street View
          </button>
        </div>

        <!-- Place Info Pop-up (Shows when a place is selected on the map) -->
        <div v-if="selectedPlace" class="place-info-popup card shadow-lg p-3">
          <button class="close-btn" @click="selectedPlace = null">&times;</button>
          <div class="row g-0">
            <div class="col-md-8">
              <h5 class="card-title">{{ selectedPlace.name }}</h5>
              <p class="card-text description-text">{{ selectedPlace.description }}</p>

              <!-- Added star icon -->
              <p class="rating-text fw-bold"><i class="fas fa-star text-warning me-1"></i> {{ selectedPlace.rating }}
                ({{ selectedPlace.user_ratings_total }})</p>

              <p class="address-text"><i class="fas fa-map-marker-alt"></i> {{ selectedPlace.address }}</p>

              <!-- Website hyperlink text -->
              <a :href="selectedPlace.website" target="_blank" class="website-link"><i class="fas fa-link"></i> Website:
                {{ selectedPlace.name }}</a>

              <div class="d-flex mt-2">
                <select v-model="selectedDateToAdd" class="form-select form-select-sm me-2" aria-label="Select Date"
                  :disabled="!Object.keys(dailyItinerary).length">
                  <option disabled value="">Select Date</option>
                  <!-- Populate date options from dailyItinerary keys -->
                  <option v-for="date in Object.keys(dailyItinerary)" :key="date" :value="date">{{ formatDay(date) }}
                  </option>
                </select>
                <!-- Add to Itinerary button now works with selectedDateToAdd -->
                <button @click="addToItinerary" :disabled="!selectedDateToAdd || !Object.keys(dailyItinerary).length"
                  class="btn btn-sm btn-success">
                  <i class="fas fa-route"></i> Add to Itinerary
                </button>
              </div>
              <small v-if="!Object.keys(dailyItinerary).length" class="text-danger mt-2">Please set trip dates
                first.</small>
            </div>
            <div class="col-md-4 text-center">
              <img :src="selectedPlace.photoUrl" class="img-fluid rounded-start place-photo" :alt="selectedPlace.name">
            </div>
          </div>
        </div>

      </div>
    </div>

    <footer-component></footer-component>

    <!-- Date Selection Modal with Start/End Date Inputs -->
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
          <!-- The button is enabled if both dates are set and there is no error -->
          <button @click="handleDateSelection" :disabled="!startDateInput || !endDateInput || !!dateError"
            class="btn btn-primary">
            Start Planning
          </button>
        </div>
      </div>
    </div>

    <!-- Existing Add Place Prompt Modal -->
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

  </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
  name: 'ItineraryPlanner',
  data() {
    return {
      // Itinerary Data Structure
      itinerary: [], // The main list for quick check of emptiness
      dailyItinerary: {}, // **INITIALIZED AS EMPTY OBJECT**

      // State for Date Selection Flow
      showDateSelectionModal: false,
      startDateInput: '', // YYYY-MM-DD
      endDateInput: '', // YYYY-MM-DD
      dateError: '',

      //favourite list
      activities: [],

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
      panorama: null,          // NEW: The Street View viewer object
      isStreetViewActive: false,
      // To store and clear map markers
    };
  },
  mounted() {
    this.loadGoogleMapsScript();
  },

  computed: {
    todayDateString() {
      // Returns today's date in YYYY-MM-DD format (e.g., '2025-10-29')
      const today = new Date();
      // Using toISOString and slicing ensures the format is always correct
      return today.toISOString().split('T')[0];
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

    // NEW: Placeholder div for the Panorama (add this to your template later)
    // <div id="street-view-panorama" v-if="isStreetViewActive"></div>

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

    // In Itinerary.vue's methods section:

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
            north: 1.5,      // Approximate NE latitude
            south: 1.1,      // Approximate SW latitude
            east: 104.1,     // Approximate NE longitude
            west: 103.5      // Approximate SW longitude
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

    // Handles date range selection and initializes the daily itinerary structure
    handleDateSelection() {
      if (this.dateError) return;

      const start = new Date(this.startDateInput + 'T00:00:00Z');
      const end = new Date(this.endDateInput + 'T00:00:00Z');

      let newDailyItinerary = {};
      const dayMs = 1000 * 60 * 60 * 24;

      for (let t = start.getTime(); t <= end.getTime(); t += dayMs) {
        const currentDate = new Date(t);
        const dateStr = currentDate.toISOString().split('T')[0];

        if (!this.dailyItinerary[dateStr]) {
          newDailyItinerary[dateStr] = {
            isExpanded: true,
            places: []
          };
        } else {
          newDailyItinerary[dateStr] = this.dailyItinerary[dateStr];
        }
      }

      const finalDateStrings = Object.keys(newDailyItinerary).filter(dateStr => {
        const date = new Date(dateStr + 'T00:00:00Z');
        return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
      }).sort();

      const finalDailyItinerary = {};
      finalDateStrings.forEach(dateStr => {
        finalDailyItinerary[dateStr] = newDailyItinerary[dateStr];
      });

      this.dailyItinerary = finalDailyItinerary;

      if (finalDateStrings.length) {
        this.dateRangeDisplay = this.formatDateRangeDisplay(finalDateStrings[0], finalDateStrings[finalDateStrings.length - 1]);
      } else {
        this.dateRangeDisplay = 'No Dates Set';
      }

      this.showDateSelectionModal = false;
      this.updateItineraryList();
      this.renderRoute(); // Call renderRoute after any change to dates/structure
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
        this.renderRoute(); // Call renderRoute after adding a place
      }
    },

    // --- Place Reordering Methods ---

    movePlace(date, fromIndex, toIndex) {
      if (toIndex < 0 || toIndex >= this.dailyItinerary[date].places.length) {
        return;
      }

      const places = [...this.dailyItinerary[date].places];
      const [movedPlace] = places.splice(fromIndex, 1);
      places.splice(toIndex, 0, movedPlace);

      this.dailyItinerary = {
        ...this.dailyItinerary,
        [date]: {
          ...this.dailyItinerary[date],
          places: places
        }
      };

      this.renderRoute(); // Rerender route after reordering
    },

    movePlaceUp(date, index) {
      if (index > 0) {
        this.movePlace(date, index, index - 1);
      }
    },

    movePlaceDown(date, index) {
      if (index < this.dailyItinerary[date].places.length - 1) {
        this.movePlace(date, index, index + 1);
      }
    },

    // --- End Reordering Methods ---

    // removePlace(date, index) {
    //   // 1. Create a deep copy of the entire dailyItinerary object
    //   const newItinerary = JSON.parse(JSON.stringify(this.dailyItinerary));

    //   // 2. Filter the places array within the copy
    //   const updatedPlaces = newItinerary[date].places.filter((_, i) => i !== index);

    //   // 3. Update the places array in the copied object
    //   newItinerary[date].places = updatedPlaces;

    //   // 4. Force Vue to replace the data property entirely
    //   this.dailyItinerary = newItinerary;

    //   this.updateItineraryList();

    //   // 5. Use $nextTick for synchronization (which is still necessary)
    //   this.$nextTick(() => {
    //     this.renderRoute();
    //   });
    // },

    removePlace(date, index) {
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

    },

    toggleDay(date) {
      // Toggle expansion state
      const isExpanded = !this.dailyItinerary[date].isExpanded;

      this.dailyItinerary = {
        ...this.dailyItinerary,
        [date]: {
          ...this.dailyItinerary[date],
          isExpanded: isExpanded
        }
      };

      // If expanding a day, render its route; if collapsing, rendering handles itself on the next check
      if (isExpanded) {
        this.renderRoute();
      } else {
        // If collapsed, force rerender to check for other expanded days
        this.renderRoute();
      }
    },

    updateItineraryList() {
      this.itinerary = Object.values(this.dailyItinerary).flatMap(day => day.places);
    },

    // --- NEW: Route Visualization Methods ---

    // This renders markers and calls the Directions API to draw the route
    renderRoute() {

      if (this.marker) { // <--- ADD THIS CHECK
        this.marker.setMap(null);
        this.marker = null;
      }
      if (!this.map || !this.directionsRenderer || !this.directionsService) return;




      // 1. Clear previous markers and route

      console.log('Before clear:', this.currentMarkers.length);
      this.currentMarkers.forEach(m => m.setMap(null));
      this.currentMarkers = [];
      console.log('After clear:', this.currentMarkers.length);
      this.directionsRenderer.setDirections({ routes: [] });

      // Find the first expanded day with places to render the route for
      const dateKeys = Object.keys(this.dailyItinerary).filter(date => this.dailyItinerary[date].places.length > 0 && this.dailyItinerary[date].isExpanded);
      if (dateKeys.length === 0 || this.dailyItinerary[dateKeys[0]].places.length < 1) { return; }

      const date = dateKeys[0];
      const places = this.dailyItinerary[date].places;

      // Render Markers
      places.forEach((place, index) => {
        const marker = new google.maps.Marker({
          position: { lat: place.lat, lng: place.lng },
          map: this.map,
          label: {
            text: `${index + 1}`,
            color: 'white',
            fontWeight: 'bold'
          },
          title: place.name,
        });
        this.currentMarkers.push(marker);
      });

      if (places.length < 2) return;

      // 2. Prepare Directions Request
      const origin = places[0];
      const destination = places[places.length - 1];
      const waypoints = places.slice(1, -1).map(p => ({
        location: { lat: p.lat, lng: p.lng },
        stopover: true
      }));

      this.directionsService.route({
        origin: { lat: origin.lat, lng: origin.lng },
        destination: { lat: destination.lat, lng: destination.lng },
        waypoints: waypoints,
        optimizeWaypoints: false,
        travelMode: google.maps.TravelMode.DRIVING
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsRenderer.setDirections(response);
          this.updateRouteInfo(response.routes[0].legs, date);

          // Fit map to the route bounding box
          this.map.fitBounds(response.routes[0].bounds);

        } else {
          console.error('Directions request failed due to ' + status);
          // Fallback: Clear previous route data if request failed
          this.clearRouteInfo(date, places);
        }
      });
    },

    // Updates the distance and duration in the itinerary list
    updateRouteInfo(legs, date) {
      const updatedPlaces = [...this.dailyItinerary[date].places];

      // The first place has no distance/duration from previous, so we start at index 1
      updatedPlaces[0].distance = null;
      updatedPlaces[0].duration = null;

      legs.forEach((leg, index) => {
        // leg index corresponds to the place index *after* the origin (0-indexed)
        if (updatedPlaces[index + 1]) {
          updatedPlaces[index + 1].distance = leg.distance.text;
          updatedPlaces[index + 1].duration = leg.duration.text;
        }
      });

      // Ensure reactivity by replacing the day object
      this.dailyItinerary = {
        ...this.dailyItinerary,
        [date]: {
          ...this.dailyItinerary[date],
          places: updatedPlaces
        }
      };
    },

    // Fallback to clear route info on error
    clearRouteInfo(date, places) {
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
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      return new Date(dateStr + 'T00:00:00Z').toLocaleDateString('en-US', options);
    },

    formatDateRangeDisplay(startStr, endStr) {
      const d_start = new Date(startStr);
      const d_end = new Date(endStr);

      const day_s = d_start.getDate();
      const month_s = (d_start.getMonth() + 1);

      const day_e = d_end.getDate();
      const month_e = (d_end.getMonth() + 1);

      return `${day_s}/${month_s} - ${day_e}/${month_e}`;
    }
  },
  watch: {
    // Watch for the modal opening to initialize Autocomplete
    addPlacePrompt(isOpen) {
      if (isOpen) {
        nextTick(() => {
          this.initAutocomplete('place-search-input');
        });
      }
    }
  }
};
</script>

<style scoped>
/* Note: Tailwind CSS is not loaded, relying on standard Bootstrap-like utility classes and custom CSS */

/* --- Layout --- */
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

.itinerary-split-view {
  display: flex;
  flex-grow: 1;
  width: 100%;
  min-height: calc(100vh - 60px);
  /* Adjust based on header height */
}

.itinerary-sidebar {
  flex: 0 0 40%;
  /* 40% width */
  padding: 20px;
  border-right: 1px solid #e0e0e0;
  background-color: #f7f9fc;
  /* Light background for the sidebar */
  overflow-y: auto;
}

.map-container {
  position: relative;
  flex-grow: 1;
  flex: 0 0 60%;
  /* 60% width */
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
