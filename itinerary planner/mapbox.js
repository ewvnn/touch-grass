mapboxgl.accessToken = 'pk.eyJ1Ijoid2FzaWwwOTAzIiwiYSI6ImNtZ3FibnVlMDJvc3EycnExOWpra3R2NDUifQ.D0VDHKli-MzvMJKVEvWU_A'; // your token

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [103.8198, 1.3521],
  zoom: 12
});

// initial locations
let locations = [
  { value: 'Marina Bay Sands Singapore', marker: null, coords: null },
  { value: 'Singapore Zoo', marker: null, coords: null },
  { value: 'Gardens by the Bay Singapore', marker: null, coords: null },
  { value: 'Changi Airport Singapore', marker: null, coords: null }
];

/* --------------------------
   UI: build inputs and pins
   -------------------------- */
function updateLocationList() {
  const parent = document.getElementById('location-list');
  parent.innerHTML = '';
  locations.forEach((loc, i) => {
    const row = document.createElement('div');
    row.className = 'location-row';

    const num = document.createElement('div');
    num.className = 'loc-num';
    num.textContent = i + 1;

    const input = document.createElement('input');
    input.className = 'loc-input';
    input.value = loc.value;
    input.placeholder = 'Enter location...';

    // Debounced geocode + pin for this input
    let localTypingTimer = null;
    input.addEventListener('input', () => { loc.value = input.value;
      clearTimeout(localTypingTimer);
      loc.value = input.value;
      localTypingTimer = setTimeout(async () => {
        if (!loc.value) {
          // empty -> remove coords and marker
          loc.coords = null;
          removeMarker(loc);
          await showPinsAndPath(); // update map
          await showRouteStats();
          return;
        }
        const feat = await geocodePlace(loc.value);
        if (feat) {
          loc.coords = feat.center;
          addOrUpdateMarker(loc);
        } else {
          // not found: keep marker removed
          loc.coords = null;
          removeMarker(loc);
        }
        await showPinsAndPath();
        await showRouteStats();
      }, 450); // debounce (ms)
    });

    // Also geocode on blur to ensure quick pin for non-typing cases
    input.addEventListener('blur', async () => { loc.value = input.value;
      if (!loc.value) return;
      const feat = await geocodePlace(loc.value);
      if (feat) {
        loc.coords = feat.center;
        addOrUpdateMarker(loc);
      }
      await showPinsAndPath();
      await showRouteStats();
    });

    row.appendChild(num);
    row.appendChild(input);
    parent.appendChild(row);
  });
}

function addLocation() {
  locations.push({ value: '', marker: null, coords: null });
  updateLocationList();
}
document.getElementById('add-location').onclick = addLocation;
updateLocationList();

/* --------------------------
   Geocoding helper
   - country=SG restricts to Singapore
   -------------------------- */
async function geocodePlace(name) {
  if (!name) return null;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(name)}.json?country=SG&limit=1&access_token=${mapboxgl.accessToken}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.features?.[0] || null;
  } catch (err) {
    console.error('Geocode error', err);
    return null;
  }
}

/* --------------------------
   Marker helpers
   -------------------------- */
function addOrUpdateMarker(loc) {
  if (!loc.coords) return;
  if (loc.marker) {
    loc.marker.setLngLat(loc.coords);
  } else {
    loc.marker = new mapboxgl.Marker({ color: '#e74c3c' })
      .setLngLat(loc.coords)
      .setPopup(new mapboxgl.Popup({ offset: 16 }).setText(loc.value || 'Location'))
      .addTo(map);
  }
}

function removeMarker(loc) {
  if (loc.marker) {
    loc.marker.remove();
    loc.marker = null;
  }
}

/* --------------------------
   Draw route on map using
   directions response geometry
   -------------------------- */
function drawRoute(geojson) {
  // Remove existing route layer/source if exists
  if (map.getLayer('routeLine')) {
    map.removeLayer('routeLine');
  }
  if (map.getSource('routeLine')) {
    map.removeSource('routeLine');
  }

  map.addSource('routeLine', {
    type: 'geojson',
    data: geojson
  });

  map.addLayer({
    id: 'routeLine',
    type: 'line',
    source: 'routeLine',
    layout: { 'line-join': 'round', 'line-cap': 'round' },
    paint: { 'line-color': '#2064d1', 'line-width': 5 }
  });
}

/* --------------------------
   Build directions request and draw real route
   -------------------------- */
async function fetchAndDrawDirections(coordsPoints, profile) {
  // coordsPoints: array of [lng, lat]
  if (!coordsPoints || coordsPoints.length < 2) return null;

  const coordsStr = coordsPoints.map(c => c.join(',')).join(';');
  // use profile from select (driving, cycling, walking)
  // include steps=true if you need step-by-step directions
  const url = `https://api.mapbox.com/directions/v5/mapbox/${profile}/${coordsStr}?geometries=geojson&overview=full&steps=true&access_token=${mapboxgl.accessToken}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.routes && data.routes[0]) {
      const routeGeojson = {
        type: 'Feature',
        geometry: data.routes[0].geometry
      };
      drawRoute(routeGeojson);

      // fit to bounds
      const bounds = new mapboxgl.LngLatBounds();
      coordsPoints.forEach(pt => bounds.extend(pt));
      map.fitBounds(bounds, { padding: 60 });

      return data.routes[0]; // return route metadata (distance, duration)
    }
  } catch (err) {
    console.error('Directions error', err);
  }
  return null;
}

/* --------------------------
   Optimization: get optimized trip order + geometry
   Mapbox Optimization endpoint -> returns trips and waypoints
   -------------------------- */
async function fetchOptimizedTrip(coordsPoints, profile) {
  if (!coordsPoints || coordsPoints.length < 2) return null;

  // Optimization endpoint expects coordinates string: lng,lat;lng,lat;...
  const coordsStr = coordsPoints.map(c => c.join(',')).join(';');
  // We ask Mapbox to return geojson geometry for the trip
  const url = `https://api.mapbox.com/optimized-trips/v1/mapbox/${profile}/${coordsStr}?geometries=geojson&overview=full&roundtrip=false&source=first&access_token=${mapboxgl.accessToken}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    // data.trips[0].geometry is the optimized route geometry
    if (data.trips && data.trips[0]) {
      return {
        trip: data.trips[0],
        waypoints: data.waypoints // waypoints with waypoint_index (original index)
      };
    } else {
      console.warn('Optimization returned no trip', data);
    }
  } catch (err) {
    console.error('Optimization error', err);
  }
  return null;
}

/* --------------------------
   Main: show pins + (optionally) draw route lines
   This version only ensures pins exist and does not draw route itself.
   Route drawing is handled by showRouteStats() / calculate buttons or optimize.
   -------------------------- */
async function showPinsAndPath() {
  // ensure markers follow coords
  locations.forEach(loc => {
    if (loc.coords) addOrUpdateMarker(loc);
    else removeMarker(loc);
  });
}

/* --------------------------
   showRouteStats (calculates route using Directions API and shows summary)
   - also draws the *actual driving/cycling/walking route geometry*
   -------------------------- */
async function showRouteStats() {
  const coords = locations.filter(loc => loc.coords).map(loc => loc.coords);
  if (coords.length < 2) return;

  const mode = document.getElementById('transport').value || 'driving';
  const route = await fetchAndDrawDirections(coords, mode);
  if (!route) return;

  const dist = (route.distance / 1000).toFixed(2);
  const dur = Math.round(route.duration / 60); // minutes

  let statsDiv = document.getElementById('route-summary');
  if (!statsDiv) {
    statsDiv = document.createElement('div');
    statsDiv.id = 'route-summary';
    statsDiv.style.marginTop = '16px';
    document.querySelector('.left-panel').appendChild(statsDiv);
  }
  statsDiv.innerHTML = `<b>Route Summary</b><br>Distance: ${dist} km<br>Duration: ${dur} min`;
}

/* --------------------------
   Button handlers
   -------------------------- */
document.getElementById('calculate-route').onclick = async () => {
  await showPinsAndPath();
  await showRouteStats();
};

document.getElementById('optimize-route').onclick = async () => {
  // Build coords array from existing coords
  const coords = locations.filter(loc => loc.coords).map(loc => loc.coords);
  if (coords.length < 2) return;

  const mode = document.getElementById('transport').value || 'driving';
  const optimized = await fetchOptimizedTrip(coords, mode);
  if (!optimized) {
    // fallback to normal directions if optimization fails
    await showRouteStats();
    return;
  }

  // Draw the optimized geometry (trip.geometry is GeoJSON)
  const tripGeo = {
    type: 'Feature',
    geometry: optimized.trip.geometry
  };
  drawRoute(tripGeo);

  // optional: reorder your locations array to match the optimized order
  // optimized.waypoints contains objects with "waypoint_index" and "location" and "name" and "trips_index"
  // We will use waypoint_index to sort original indices into new order:
  const order = optimized.waypoints
    .sort((a, b) => a.waypoint_index - b.waypoint_index)
    .map(wp => wp.waypoint_index);

  // The way Mapbox returns waypoints links indexes to the input order, but to keep
  // things simple we'll create a newLocations in optimized order using the 'waypoint_index' mapping.
  // NOTE: ensure optimized.waypoints length matches coords.length
  const newLocations = [];
  // Map from original coords to location objects (since duplicate coords can exist we map by index)
  const originalIndexed = locations.filter(l => l.coords);
  // Build newLocations in optimized order using the 'waypoint_index' ordering
  // optimized.waypoints[i].waypoint_index is the position in the sorted trip; they also include 'trips_index' and 'location' (lng,lat)
  const sortedByIndex = optimized.waypoints.slice().sort((a,b)=>a.waypoint_index - b.waypoint_index);
  for (const wp of sortedByIndex) {
    // waypoint 'waypoint_index' indicates order, but we need to find which original location corresponds
    // mapbox's optimized waypoints also have 'waypoint_index' and 'waypoint_index' matches position in sorted order,
    // and 'location' is the coordinate returned. We'll find the matching original by coordinates.
    const locMatchIndex = originalIndexed.findIndex(ol => ol.coords[0] === wp.location[0] && ol.coords[1] === wp.location[1]);
    if (locMatchIndex > -1) {
      newLocations.push(originalIndexed[locMatchIndex]);
    } else {
      // fallback: create placeholder
      newLocations.push({ value: wp.name || 'Waypoint', marker: null, coords: wp.location });
    }
  }

  // Replace only the coords-bearing locations in the original array to keep empty rows at the end:
  // Build final array: first the optimized ones, then any remaining locations without coords
  const remaining = locations.filter(l => !l.coords);
  locations = [...newLocations, ...remaining];

  // Re-render inputs (so numbering/order updates)
  updateLocationList();

  // Fit to bounds of the route
  const bounds = new mapboxgl.LngLatBounds();
  const coordsPoints = locations.filter(l => l.coords).map(l => l.coords);
  coordsPoints.forEach(pt => bounds.extend(pt));
  map.fitBounds(bounds, { padding: 60 });

  // update route summary (distance/duration from optimized.trip)
  const dist = (optimized.trip.distance / 1000).toFixed(2);
  const dur = Math.round(optimized.trip.duration / 60);
  let statsDiv = document.getElementById('route-summary');
  if (!statsDiv) {
    statsDiv = document.createElement('div');
    statsDiv.id = 'route-summary';
    statsDiv.style.marginTop = '16px';
    document.querySelector('.left-panel').appendChild(statsDiv);
  }
  statsDiv.innerHTML = `<b>Optimized Route</b><br>Distance: ${dist} km<br>Duration: ${dur} min`;
};

document.getElementById('tour-btn').onclick = async () => {
  // same as calculate for now
  await showPinsAndPath();
  await showRouteStats();
};

/* --------------------------
   initial: geocode initial locations and show
   -------------------------- */
(async function initPins() {
  for (const loc of locations) {
    if (!loc.value) continue;
    const feat = await geocodePlace(loc.value);
    if (feat) {
      loc.coords = feat.center;
      addOrUpdateMarker(loc);
    }
  }
  updateLocationList(); // ensure inputs show any updated coords
  await showPinsAndPath();
  await showRouteStats();
})();
