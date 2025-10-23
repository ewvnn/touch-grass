<template>
  <div id="itinerary-planner">
    <header-component></header-component>

    <div :class="{'map-fullscreen': !itinerary.length, 'itinerary-split-view': itinerary.length}">

      <div v-if="itinerary.length" class="itinerary-sidebar">
        <h2>Itinerary</h2>
        <div class="date-range">{{ dateRangeDisplay }}</div>

        <div v-if="!hasAccommodation" class="alert alert-info mb-4 p-3 stay-prompt">
          <div class="d-flex align-items-center">
            <i class="fas fa-bed me-2"></i>
            <div>
              <p class="mb-1 fw-bold">Need a place to stay?</p>
              <small>Looks like you don't have lodging for {{ dateRangeDisplay }}.</small>
            </div>
          </div>
          <button class="btn btn-sm btn-light mt-2">Book hotels</button>
        </div>

        <div v-for="date in Object.keys(dailyItinerary)" :key="date" class="itinerary-day-section">
          <h3 @click="toggleDay(date)" class="day-header">
            {{ formatDay(date) }}
            <i :class="['fas', dailyItinerary[date].isExpanded ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
          </h3>
          <div v-show="dailyItinerary[date].isExpanded" class="place-list">
            <draggable
              v-model="dailyItinerary[date].places"
              group="places"
              item-key="place_id"
              class="list-group"
              @end="onDragEnd"
            >
              <template #item="{ element: place, index }">
                <div class="list-group-item d-flex align-items-center mb-3 p-3 itinerary-item shadow-sm">
                  <div class="index-circle">{{ index + 1 }}</div>
                  <div class="place-details flex-grow-1 ms-3">
                    <h5 class="mb-1">{{ place.name }}</h5>
                    <small>{{ place.address }}</small>
                    <div v-if="index > 0" class="route-info d-flex align-items-center mt-2">
                      <span class="distance-text me-3"><i class="fas fa-route"></i> {{ calculateDistance(index, dailyItinerary[date].places) }}</span>
                      <button @click="getDirections(dailyItinerary[date].places[index-1], place)" class="btn btn-sm btn-link p-0 directions-btn">Directions</button>
                    </div>
                  </div>
                  <button @click="removePlace(date, index)" class="btn btn-sm btn-outline-danger ms-2"><i class="fas fa-trash"></i></button>
                </div>
              </template>
            </draggable>
            <button @click="addPlacePrompt = true; selectedDate = date" class="btn btn-block btn-outline-secondary mt-3 add-place-btn">
              <i class="fas fa-plus"></i> Add a place
            </button>
          </div>
          <hr/>
        </div>
      </div>

      <div :class="['map-container', {'col-12': !itinerary.length, 'col-7': itinerary.length}]">
        <div id="google-map"></div>

        <div v-if="!itinerary.length" class="map-initial-prompt p-4 shadow-lg">
          <h4 class="mb-3">Add some places</h4>
          <p>Try typing **Gardens by the Bay** into one of these fields on the left:</p>
          <div class="d-grid gap-2">
            <button @click="startPlanning" class="btn btn-primary btn-lg"><i class="fas fa-map-marker-alt me-2"></i> Add a place</button>
          </div>
          <hr>
          <p>Or explore **DEM Flyers Singapore** Recommendations</p>
        </div>

        <div v-if="selectedPlace" class="place-info-popup card shadow-lg p-3">
          <button class="close-btn" @click="selectedPlace = null">&times;</button>
          <div class="row g-0">
            <div class="col-md-8">
              <h5 class="card-title">{{ selectedPlace.name }}</h5>
              <p class="card-text description-text">{{ selectedPlace.description }}</p>
              <p class="rating-text"><i class="fas fa-star text-warning"></i> {{ selectedPlace.rating }} ({{ selectedPlace.user_ratings_total }})</p>
              <p class="address-text"><i class="fas fa-map-marker-alt"></i> {{ selectedPlace.address }}</p>
              <a :href="selectedPlace.website" target="_blank" class="website-link"><i class="fas fa-link"></i> Website</a>
              <div class="d-flex mt-2">
                <select v-model="selectedDateToAdd" class="form-select form-select-sm me-2" aria-label="Select Date">
                  <option disabled value="">Select Date</option>
                  <option v-for="date in Object.keys(dailyItinerary)" :key="date" :value="date">{{ formatDay(date) }}</option>
                </select>
                <button @click="addToItinerary" :disabled="!selectedDateToAdd" class="btn btn-sm btn-success">Add to Itinerary</button>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <img :src="selectedPlace.photoUrl" class="img-fluid rounded-start place-photo" :alt="selectedPlace.name">
            </div>
          </div>
        </div>

      </div>
    </div>

    <footer-component></footer-component>

    <div v-if="addPlacePrompt" class="modal-overlay">
      <div class="modal-content p-4 shadow-lg">
        <h4>Add a place on {{ formatDay(selectedDate) }}</h4>
        <input type="text" id="place-search-input" class="form-control mt-3 mb-3" placeholder="Search for a location...">
        <div class="d-flex justify-content-end">
          <button @click="addPlacePrompt = false" class="btn btn-secondary me-2">Cancel</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { nextTick } from 'vue';
import draggable from 'vuedraggable';

// NOTE: You would typically import your Header and Footer components here
// import HeaderComponent from './HeaderComponent.vue';
// import FooterComponent from './FooterComponent.vue';

export default {
  name: 'ItineraryPlanner',
  components: {
    draggable,
    // HeaderComponent,
    // FooterComponent,
  },
  data() {
    return {
      // Itinerary Data Structure
      itinerary: [], // The main list for quick check of emptiness
      dailyItinerary: {
        '2025-10-30': {
          isExpanded: true,
          places: [
            // Sample data to match the screenshot
            { place_id: 'gby1', name: 'Gardens by the Bay', address: '18 Marina Gardens Dr, Singapore', lat: 1.2816, lng: 103.8637, description: 'A network of modern greenhouses & waterfront parks containing super trees lined with solar cells.', photoUrl: 'path/to/gby_img.jpg', rating: 4.7, user_ratings_total: 151555 },
          ]
        },
        '2025-10-31': {
          isExpanded: false,
          places: []
        }
      },

      // Map/Search State
      map: null,
      marker: null,
      geocoder: null,
      autocomplete: null,
      selectedPlace: null, // Holds the detailed place object for the floating pop-up
      selectedDateToAdd: '',

      // UI State
      hasAccommodation: false,
      dateRangeDisplay: '30/10 - 31/10', // Based on the image
      addPlacePrompt: false, // Controls the search prompt overlay
      selectedDate: null, // Used when adding a place via the prompt
    };
  },
  mounted() {
    this.loadGoogleMapsScript();
  },
  methods: {
    loadGoogleMapsScript() {
      if (window.google) {
        this.initMap();
        return;
      }
      const script = document.createElement('script');
      // **IMPORTANT**: Replace 'YOUR_API_KEY' with your actual Google Maps API Key
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = this.initMap;
      document.head.appendChild(script);
    },

    async initMap() {
      await nextTick(); // Wait for the DOM to be ready

      this.map = new google.maps.Map(document.getElementById('google-map'), {
        center: { lat: 1.3521, lng: 103.8198 }, // Centered on Singapore
        zoom: 11,
        disableDefaultUI: true,
        zoomControl: true,
      });

      this.geocoder = new google.maps.Geocoder();

      // Initialize Autocomplete for the initial search prompt overlay
      this.initAutocomplete('place-search-input');

      // Update the main itinerary array for the split-view class
      this.updateItineraryList();

      // Render existing markers
      this.renderMarkers();
    },

    initAutocomplete(elementId) {
      const input = document.getElementById(elementId);
      if (input && window.google) {
        this.autocomplete = new google.maps.places.Autocomplete(input, {
          componentRestrictions: { country: 'sg' }, // Restrict search to Singapore
          fields: ['name', 'formatted_address', 'geometry', 'place_id', 'website', 'rating', 'user_ratings_total', 'photos'],
        });
        this.autocomplete.addListener('place_changed', this.onPlaceSelected);
      }
    },

    onPlaceSelected() {
      const place = this.autocomplete.getPlace();
      if (!place.geometry) {
        console.error("Returned place contains no geometry");
        return;
      }

      this.addPlacePrompt = false; // Close the initial prompt/modal
      this.displayPlaceOnMap(place);
    },

    displayPlaceOnMap(place) {
      // 1. Center the map on the new location
      this.map.setCenter(place.geometry.location);
      this.map.setZoom(15);

      // 2. Drop a pin (marker)
      if (this.marker) {
        this.marker.setMap(null); // Remove previous marker
      }
      this.marker = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location,
        animation: google.maps.Animation.DROP,
      });

      // 3. Show floating pop-up with details
      this.selectedPlace = {
        place_id: place.place_id,
        name: place.name,
        address: place.formatted_address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        website: place.website || '#',
        rating: place.rating || 'N/A',
        user_ratings_total: place.user_ratings_total || 0,
        description: 'Pulling description from Google Maps is complex, this is placeholder text.',
        photoUrl: place.photos && place.photos.length > 0
          ? place.photos[0].getUrl({ maxWidth: 200, maxHeight: 100 })
          : 'path/to/placeholder_img.jpg',
      };
      this.selectedDateToAdd = this.selectedDate || Object.keys(this.dailyItinerary)[0]; // Default to first date
    },

    addToItinerary() {
      if (this.selectedPlace && this.selectedDateToAdd) {
        // Create a minimal place object for the itinerary
        const place = {
          place_id: this.selectedPlace.place_id,
          name: this.selectedPlace.name,
          address: this.selectedPlace.address,
          lat: this.selectedPlace.lat,
          lng: this.selectedPlace.lng,
          // Keep only essential data for the itinerary list
        };

        this.dailyItinerary[this.selectedDateToAdd].places.push(place);
        this.selectedPlace = null; // Hide the pop-up
        this.updateItineraryList();
        this.renderMarkers();
      }
    },

    removePlace(date, index) {
      this.dailyItinerary[date].places.splice(index, 1);
      this.updateItineraryList();
      this.renderMarkers();
    },

    toggleDay(date) {
      this.dailyItinerary[date].isExpanded = !this.dailyItinerary[date].isExpanded;
    },

    updateItineraryList() {
      // Flattens the daily itineraries to update the main state
      this.itinerary = Object.values(this.dailyItinerary).flatMap(day => day.places);
    },

    startPlanning() {
      // 1. Transition the map to the split view by immediately setting a sample date
      // This is a simplified way to kick off the process matching the user request flow.
      this.dailyItinerary['2025-10-31'].places = [{ place_id: 'gby1', name: 'Gardens by the Bay', address: '18 Marina Gardens Dr, Singapore', lat: 1.2816, lng: 103.8637 }];
      this.updateItineraryList();
      // 2. Open the prompt for searching
      this.addPlacePrompt = true;
      this.selectedDate = '2025-10-31';

      // Re-initialize autocomplete to attach to the new input in the modal
      nextTick(() => {
        this.initAutocomplete('place-search-input');
      });
    },

    // Directions and Distance Calculation
    calculateDistance(index, places) {
      if (index === 0) return '';
      const start = places[index - 1];
      const end = places[index];

      // Simplified distance calculation for display
      const R = 6371; // Radius of Earth in km
      const dLat = (end.lat - start.lat) * (Math.PI / 180);
      const dLon = (end.lng - start.lng) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(start.lat * (Math.PI / 180)) * Math.cos(end.lat * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // in km

      return `${distance.toFixed(1)} km`; // Returns distance in km
    },

    getDirections(origin, destination) {
      // Opens Google Maps in a new tab with directions set
      const originStr = `${origin.lat},${origin.lng}`;
      const destStr = `${destination.lat},${destination.lng}`;
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${originStr}&destination=${destStr}&travelmode=driving`;
      window.open(directionsUrl, '_blank');
    },

    onDragEnd() {
      this.renderMarkers();
      // No need to update 'itinerary' state, as v-model in draggable handles the array changes.
    },

    // Marker Rendering
    renderMarkers() {
      if (!this.map) return;

      // Clear all existing markers
      if (this.currentMarkers) {
        this.currentMarkers.forEach(marker => marker.setMap(null));
      }
      this.currentMarkers = [];

      // Create new markers for all places in the itinerary
      Object.values(this.dailyItinerary).forEach(day => {
        day.places.forEach((place, index) => {
          const marker = new google.maps.Marker({
            position: { lat: place.lat, lng: place.lng },
            map: this.map,
            label: {
                text: `${index + 1}`, // Show the index on the marker
                color: 'white',
                fontWeight: 'bold'
            },
            title: place.name,
          });
          this.currentMarkers.push(marker);
        });
      });
    },

    // Formatting Helpers
    formatDay(dateStr) {
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString('en-US', options);
    }
  },
};
</script>

<style scoped>
/* Bootstrap-like styles for structure and components */

/* --- Layout --- */
#itinerary-planner {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.map-fullscreen, .itinerary-split-view {
  display: flex;
  flex-grow: 1;
  width: 100%;
}

.map-fullscreen {
  height: calc(100vh - 60px); /* Adjust based on header height */
}

.itinerary-split-view {
  min-height: calc(100vh - 60px);
}

.itinerary-sidebar {
  flex: 0 0 40%; /* 40% width */
  padding: 20px;
  border-right: 1px solid #ccc;
  overflow-y: auto;
}

.map-container {
  position: relative;
  flex-grow: 1;
}

#google-map {
  width: 100%;
  height: 100%;
}

/* --- Itinerary Items --- */
.itinerary-item {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  cursor: grab;
  transition: all 0.2s;
}

.itinerary-item:active {
  background-color: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.index-circle {
    width: 30px;
    height: 30px;
    background-color: #6f42c1; /* Purple/Accent Color */
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    flex-shrink: 0;
}

.route-info {
  font-size: 0.9em;
  color: #6c757d;
}

.directions-btn {
  color: #0d6efd;
  font-weight: 600;
}

/* --- Map Popups --- */
.map-initial-prompt {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  z-index: 10;
  text-align: center;
}

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
}

.place-photo {
  max-height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  z-index: 11;
}

/* --- Other UI Elements --- */
.stay-prompt {
  background-color: #f0f8ff; /* Light blue background */
  border: 1px solid #b3d4ff;
  border-radius: 8px;
}

.day-header {
  cursor: pointer;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
}
</style>