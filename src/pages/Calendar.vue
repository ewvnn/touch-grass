<template>
<div class="container-fluid d-flex flex-column flex-lg-row py-3">
  
  <!-- friends list/saved filters -->
  <section class="filters text-center my-auto col-12 col-lg-4 h-100 overflow-auto" style="background-color: rgba(255, 255, 255, 0.575); border-radius: 10px;">
    <h2>Friends</h2>
    <ul class="friends-list">
      <li>
        <span>John Doe</span>
        <input type="checkbox" class="friend-check" value="John Doe">
      </li>
      <li>
        <span>Jane Smith</span>
        <input type="checkbox" class="friend-check" value="Jane Smith">
      </li>
      <li>
        <span>Michael Tan</span>
        <input type="checkbox" class="friend-check" value="Michael Tan">
      </li>
      <li>
        <span>Sarah Lim</span>
        <input type="checkbox" class="friend-check" value="Sarah Lim">
      </li>
    </ul>

    <div class="btn-group d-flex flex-column align-items-center">
      <!-- give the favourites button a hook class -->
      <button class="btn btn-success mb-2 w-50 btn-favourites" type="button">⭐ Hide Favourites</button>
      <button class="btn btn-outline-secondary mb-2 w-50" type="button">💾 Saved</button>
    </div>
  </section>

  <!-- calendar -->
  <section class="calendar-section text-center col-12 col-lg-8 mx-2" style="background-color: rgba(255, 255, 255, 0.575); border-radius: 10px;">
    <div class="calendar-card" id="calendarCard">
      <h1 id="calendarTitle">My Calendar</h1>
      <p class="lead">Upcoming events</p>

      <div id="events" class="events" aria-live="polite">
        <!-- replaced the Google Calendar iframe with a div for FullCalendar -->
        <div id="tgCalendar" aria-label="Interactive calendar showing events"></div>
      </div>

      <div class="meta">
        <span id="lastUpdated"></span>
      </div>

      <div class="small-note">
        This demo renders events locally so you can filter favourites. You can later swap the data source to Google Calendar API.
      </div>
    </div>
  </section>
</div>

</template>



<!-- FullCalendar JS
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.14/index.global.min.js"></script> -->

<script setup>
  document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('tgCalendar');

    // --- Fake events (some marked as favourite: true) ---
    // dates use Asia/Singapore timezone
    const allEvents = [
      {
        id: 'e1',
        title: 'Botanic Gardens Picnic',
        start: '2025-10-14T12:00:00',
        end: '2025-10-14T14:00:00',
        location: 'Singapore Botanic Gardens',
        favourite: false
      },
      {
        id: 'e2',
        title: 'East Coast Cycling',
        start: '2025-10-16T09:00:00',
        end: '2025-10-16T11:00:00',
        location: 'East Coast Park',
        favourite: false
      },
      {
        id: 'e3',
        title: 'MacRitchie Hike',
        start: '2025-10-18',
        allDay: true,
        location: 'MacRitchie Reservoir',
        favourite: false
      },
      {
        id: 'e4',
        title: 'Pulau Ubin Photoshoot',
        start: '2025-10-20T08:30:00',
        end: '2025-10-20T12:30:00',
        location: 'Pulau Ubin',
        favourite: false
      }
    ];

    // --- Create FullCalendar instance ---
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      height: 'auto',
      timeZone: 'Asia/Singapore',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      events: allEvents,
      eventDidMount: function (info) {
        // add a visual cue for favourite events
        if (info.event.extendedProps.favourite) {
          info.el.classList.add('tg-favorite-event');
          // accessibility labels and title hint
          const base = info.el.getAttribute('aria-label') || info.event.title;
          info.el.setAttribute('aria-label', base + ' (favourite)');
          info.el.title = (info.el.title || info.event.title) + ' ★ favourite';
        }
      },
      eventMouseEnter: function(info) {
        // optional: show location in browser tooltip
        if (info.event.extendedProps.location) {
          info.el.title = info.event.title + (info.event.extendedProps.favourite ? ' ★' : '') +
            '\\n' + info.event.extendedProps.location;
        }
      }
    });

    calendar.render();

    // update "last updated" meta
    const lastUpdatedEl = document.getElementById('lastUpdated');
    if (lastUpdatedEl) {
      const now = new Date();
      lastUpdatedEl.textContent = 'Last updated: ' + now.toLocaleString('en-SG', { hour12: false });
    }

    // --- Favourites toggle logic ---
    const favBtn = document.querySelector('.btn-favourites');
    let showingFavouritesOnly = false;

    function refreshEvents() {
      const data = showingFavouritesOnly
        ? allEvents.filter(e => e.favourite)
        : allEvents;

      calendar.removeAllEvents();
      calendar.addEventSource(data);
    }

    favBtn?.addEventListener('click', () => {
      showingFavouritesOnly = !showingFavouritesOnly;
      favBtn.classList.toggle('active', showingFavouritesOnly);
      favBtn.textContent = showingFavouritesOnly ? '⭐ Show Favourites' : '⭐ Hide Favourites';
      refreshEvents();
    });
  });
</script>

<style>
li {
  list-style-type: none;
}

.friend-check {
  margin: 1em;
}
</style>