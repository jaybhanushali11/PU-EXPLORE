// Initialize Map
const map = L.map('map', {
  zoomControl: false // We will add zoom control elsewhere or rely on touch/scroll
}).setView([22.2887, 73.3639], 17); // Parul University Coordinates

// Google Satellite Tiles
L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  attribution: 'Map data &copy; Google'
}).addTo(map);

// Locations Data
// Locations Data
const locations = [
  { name: "Parul University Circle", lat: 22.288805, lng: 73.364571, category: "Gate", description: "Central landmark circle.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/circle.svg" },
  { name: "Parul Admin Cell", lat: 22.288759, lng: 73.363886, category: "Admin", description: "Administrative office.", image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=600&q=80", icon: "icons/admin.svg" },
  { name: "Parul University Auditorium", lat: 22.288838, lng: 73.363836, category: "Auditorium", description: "Main auditorium.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80", icon: "icons/auditorium.svg" },
  { name: "Sardar Bhawan - A | Boys Hostel", lat: 22.289089, lng: 73.363345, category: "Hostel", description: "Boys Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Parul Institute of Ayurved", lat: 22.289228, lng: 73.363404, category: "College", description: "Ayurveda Institute.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "PU Football Ground", lat: 22.289319, lng: 73.362717, category: "Ground", description: "Football field.", image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=600&q=80", icon: "icons/ground.svg" },
  { name: "Parul University Gate No. 3", lat: 22.287617, lng: 73.363067, category: "Gate", description: "Entrance Gate 3.", image: "https://images.unsplash.com/photo-1542601906990-24ccd54b549c?auto=format&fit=crop&w=600&q=80", icon: "icons/gate.svg" },
  { name: "Parking Area", lat: 22.288172, lng: 73.362587, category: "Parking", description: "General parking.", image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80", icon: "icons/parking.svg" },
  { name: "Parul Institute of Management & Research", lat: 22.289178, lng: 73.361967, category: "College", description: "PIMR Building.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "Indira Bhawan - A", lat: 22.289741, lng: 73.361623, category: "Hostel", description: "Girls Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Mr. Puff", lat: 22.289969, lng: 73.364386, category: "Food", description: "Bakery and snacks.", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80", icon: "icons/food.svg" },
  { name: "Mr. Beans & Farki", lat: 22.289942, lng: 73.364677, category: "Food", description: "Cafe and beverages.", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80", icon: "icons/food.svg" },
  { name: "Basketball Court", lat: 22.290399, lng: 73.364629, category: "Ground", description: "Basketball court.", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80", icon: "icons/ground.svg" },
  { name: "PU Fitness GYM", lat: 22.290010, lng: 73.364971, category: "Gym", description: "University Gym.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80", icon: "icons/gym.svg" },
  { name: "Shree Sai Temple", lat: 22.290577, lng: 73.365056, category: "Temple", description: "Campus Temple.", image: "https://images.unsplash.com/photo-1548602088-9d12a4f9c10f?auto=format&fit=crop&w=600&q=80", icon: "icons/temple.svg" },
  { name: "Shastri Bhawan A", lat: 22.290924, lng: 73.364863, category: "Hostel", description: "Boys Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Shastri Bhawan B", lat: 22.290972, lng: 73.365145, category: "Hostel", description: "Boys Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Shastri Bhawan C", lat: 22.290872, lng: 73.365241, category: "Hostel", description: "Boys Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Domino's Pizza", lat: 22.291166, lng: 73.364712, category: "Food", description: "Pizza outlet.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80", icon: "icons/food.svg" },
  { name: "Parul Watcher's Park", lat: 22.291274, lng: 73.364150, category: "Park", description: "Green park area.", image: "https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?auto=format&fit=crop&w=600&q=80", icon: "icons/park.svg" },
  { name: "Greenzy Food Court", lat: 22.291402, lng: 73.363705, category: "Food", description: "Open food court.", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80", icon: "icons/food.svg" },
  { name: "Parul Institute of Nursing", lat: 22.290167, lng: 73.366240, category: "College", description: "Nursing College.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "Jawaharlal Nehru Homoeopathic College", lat: 22.290610, lng: 73.365425, category: "College", description: "Medical College.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "Parul Polytechnic Institute", lat: 22.291042, lng: 73.365941, category: "College", description: "Polytechnic Building.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "Volleyball Court", lat: 22.290341, lng: 73.364062, category: "Ground", description: "Sports court.", image: "https://images.unsplash.com/photo-1612872087720-48ca45e4c6c0?auto=format&fit=crop&w=600&q=80", icon: "icons/ground.svg" },
  { name: "Tennis Court", lat: 22.290562, lng: 73.364157, category: "Ground", description: "Sports court.", image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=600&q=80", icon: "icons/ground.svg" },
  { name: "Tagore Bhawan A", lat: 22.291929, lng: 73.364635, category: "Hostel", description: "Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Tagore Bhawan B", lat: 22.291936, lng: 73.364636, category: "Hostel", description: "Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Medical Central Library", lat: 22.292250, lng: 73.366286, category: "Library", description: "Central Library.", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80", icon: "icons/library.svg" },
  { name: "Parul Institute of Medical Sciences", lat: 22.292496, lng: 73.366894, category: "College", description: "Medical Research.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "PIPHS (Paramedical)", lat: 22.292790, lng: 73.367180, category: "College", description: "Health Sciences.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "Medical Auditorium", lat: 22.293102, lng: 73.367153, category: "Auditorium", description: "Auditorium.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80", icon: "icons/auditorium.svg" },
  { name: "Capitol Crust", lat: 22.293885, lng: 73.365865, category: "Food", description: "Food outlet.", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80", icon: "icons/food.svg" },
  { name: "Parul Swimming Pool", lat: 22.292641, lng: 73.365938, category: "Pool", description: "Swimming pool.", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80", icon: "icons/pool.svg" },
  { name: "Kathi Junction", lat: 22.292485, lng: 73.364607, category: "Food", description: "Food outlet.", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80", icon: "icons/food.svg" },
  { name: "Cricket Net Practice", lat: 22.292474, lng: 73.364070, category: "Ground", description: "Practice nets.", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80", icon: "icons/ground.svg" },
  { name: "C V Raman Center", lat: 22.292248, lng: 73.363047, category: "College", description: "Academic Center.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "Bhagat Singh Bhawan", lat: 22.291465, lng: 73.363195, category: "College", description: "Academic Block.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "Annapurna Bhavan", lat: 22.290552, lng: 73.362648, category: "Food", description: "Mess / Canteen.", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80", icon: "icons/food.svg" },
  { name: "Institute of Architecture", lat: 22.290086, lng: 73.361915, category: "College", description: "Architecture Dept.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "Milkha Bhawan-A", lat: 22.289130, lng: 73.361043, category: "Hostel", description: "Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Indira Bhawan (Block 2)", lat: 22.289709, lng: 73.361610, category: "Hostel", description: "Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Shakuntala Bhavan (Block 1)", lat: 22.295228, lng: 73.364747, category: "Hostel", description: "Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Shakuntala Bhavan (Block 2)", lat: 22.295264, lng: 73.364747, category: "Hostel", description: "Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Institute of Design", lat: 22.294948, lng: 73.364266, category: "College", description: "Design School.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "Subhash Chandra Bose Bhavan", lat: 22.292925, lng: 73.362169, category: "College", description: "Academic Block.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "Pearson VUE Test Center", lat: 22.292861, lng: 73.361829, category: "College", description: "Exam Center.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "Bus Parking (Azad)", lat: 22.294045, lng: 73.362617, category: "Parking", description: "Bus Parking.", image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80", icon: "icons/parking.svg" },
  { name: "Azad Bhavan B", lat: 22.294764, lng: 73.362205, category: "Hostel", description: "Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Azad Bhavan C", lat: 22.295027, lng: 73.362087, category: "Hostel", description: "Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Azad Bhawan Park", lat: 22.294527, lng: 73.361684, category: "Park", description: "Hostel Park.", image: "https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?auto=format&fit=crop&w=600&q=80", icon: "icons/park.svg" },
  { name: "Tagore C", lat: 22.295330, lng: 73.360625, category: "Hostel", description: "Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Atal Bhavan B", lat: 22.294985, lng: 73.359883, category: "Hostel", description: "Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Atal Bhavan A", lat: 22.294803, lng: 73.359317, category: "Hostel", description: "Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Utopia Food Court", lat: 22.293904, lng: 73.358841, category: "Food", description: "Food Court.", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80", icon: "icons/food.svg" },
  { name: "Institute of Homoeopathy", lat: 22.293505, lng: 73.359158, category: "College", description: "Medical College.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", icon: "icons/college.svg" },
  { name: "Hockey Ground", lat: 22.294565, lng: 73.366450, category: "Ground", description: "Sports Field.", image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=600&q=80", icon: "icons/ground.svg" },
  { name: "Teresa Bhawan D", lat: 22.294520, lng: 73.367860, category: "Hostel", description: "Girls Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" },
  { name: "Cricket Ground", lat: 22.294470, lng: 73.368784, category: "Ground", description: "Main Cricket Ground.", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80", icon: "icons/ground.svg" },
  { name: "Teresa Bhawan Ground", lat: 22.293613, lng: 73.368367, category: "Ground", description: "Sports area.", image: "https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?auto=format&fit=crop&w=600&q=80", icon: "icons/ground.svg" },
  { name: "Teresa Block A", lat: 22.292614, lng: 73.367650, category: "Hostel", description: "Girls Hostel.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", icon: "icons/hostel.svg" }
];

let markers = [];
const bottomSheet = document.querySelector('.bottom-sheet');
const sheetContent = document.querySelector('.sheet-content');
let routingControl = null;

// User Location State
let userMarker = null;
let userAccuracyCircle = null;
let userWatchId = null;
let currentUserPos = null;

// Icon Helper
function getCustomIcon(iconUrl) {
  return L.icon({
    iconUrl: iconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 20], // Center
    popupAnchor: [0, -20],
    className: 'smooth-icon' // For CSS Transitions
  });
}

// Initialize Markers
let currentFilter = 'All'; // Global state for filter
const ZOOM_THRESHOLD = 16; // Hide markers below this zoom level if 'All' is selected

// Add Markers
function loadMarkers(filterCategory = 'All') {
  currentFilter = filterCategory; // Update global state

  // Clear existing from map and array
  markers.forEach(m => {
    if (map.hasLayer(m)) map.removeLayer(m);
  });
  markers = [];

  const zoom = map.getZoom();
  // Visibility Logic: Show if (Not 'All') OR (Zoom is high enough)
  const shouldShow = (currentFilter !== 'All') || (zoom >= ZOOM_THRESHOLD);

  locations.forEach(loc => {
    if (filterCategory !== 'All' && loc.category !== filterCategory) return;

    const marker = L.marker([loc.lat, loc.lng], {
      icon: getCustomIcon(loc.icon)
    });

    // Only add to map if visible
    if (shouldShow) {
      marker.addTo(map);
    }

    // Marker Click Event
    marker.on('click', () => {
      openBottomSheet(loc);
      map.flyTo([loc.lat, loc.lng], 18, {
        animate: true,
        duration: 1
      });
    });

    markers.push(marker);
    marker.feature = loc; // Attach data to marker
  });
}

// Zoom End Listener to toggle visibility
map.on('zoomend', () => {
  const zoom = map.getZoom();
  const shouldShow = (currentFilter !== 'All') || (zoom >= ZOOM_THRESHOLD);

  markers.forEach(marker => {
    if (shouldShow) {
      if (!map.hasLayer(marker)) marker.addTo(map);
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });
});

// Initialize Markers
loadMarkers();

// Bottom Sheet Logic
function openBottomSheet(location) {
  document.getElementById('loc-img').src = location.image;
  document.getElementById('loc-name').innerText = location.name;
  document.getElementById('loc-desc').innerText = location.description;

  // Clear previous route stats
  const statsDiv = document.getElementById('route-stats');
  statsDiv.classList.remove('active');
  statsDiv.innerHTML = '';

  // Update Directions Logic
  const dirBtn = document.getElementById('directions-btn');
  dirBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
        Get Directions
    `;

  dirBtn.onclick = () => {
    dirBtn.innerHTML = 'Calculating...';

    // Helper to run route calculation
    const runRoute = (lat, lng) => {
      calculateRoute(lat, lng, location.lat, location.lng);
      dirBtn.innerHTML = 'Directions Found';
    };

    if (currentUserPos) {
      // Use cached high-accuracy position if available
      runRoute(currentUserPos.lat, currentUserPos.lng);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;
        // Also update global state just in case
        currentUserPos = { lat: userLat, lng: userLng };
        runRoute(userLat, userLng);
      }, (err) => {
        alert("Could not access location. Please enable GPS.");
        dirBtn.innerHTML = 'Get Directions';
      }, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      });
    } else {
      alert("Geolocation is not supported.");
      dirBtn.innerHTML = 'Get Directions';
    }
  };

  bottomSheet.classList.add('active');
}

// Route State
let currentDestination = null;
let lastRouteUpdatePos = null;

// Calculate Route Function
function calculateRoute(startLat, startLng, endLat, endLng) {
  if (routingControl) {
    map.removeControl(routingControl);
  }

  // Store destination for dynamic updates
  currentDestination = { lat: endLat, lng: endLng };
  lastRouteUpdatePos = L.latLng(startLat, startLng);

  routingControl = L.Routing.control({
    waypoints: [
      L.latLng(startLat, startLng),
      L.latLng(endLat, endLng)
    ],
    router: new L.Routing.osrmv1({
      profile: 'foot', // Walk/Shortcuts
      serviceUrl: 'https://router.project-osrm.org/route/v1'
    }),
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    lineOptions: {
      styles: [{ color: '#1E88E5', opacity: 0.8, weight: 6 }]
    },
    createMarker: function () { return null; } // Don't create default markers
  })
    .on('routesfound', function (e) {
      const routes = e.routes;
      const summary = routes[0].summary;
      // summary.totalDistance is in meters
      // summary.totalTime is in seconds

      const dist = (summary.totalDistance / 1000).toFixed(2) + ' km';
      const time = Math.round(summary.totalTime / 60) + ' min';

      const statsDiv = document.getElementById('route-stats');
      statsDiv.innerHTML = `<div>Distance: <span>${dist}</span></div><div>Est. Time: <span>${time}</span> (Walking)</div>`;
      statsDiv.classList.add('active');
    })
    .on('routingerror', function (e) {
      console.error('Routing error:', e);
      // alert('Could not find a walking route to this location.'); // Suppress alert for dynamic updates
    })
    .addTo(map);
}

// Close Bottom Sheet on Map Click
map.on('click', () => {
  // If user explicitly clicks map, they might want to clear route tracking?
  // For now, let's just close the sheet. 
  // Optionally reset destination if you want to stop routing: 
  // currentDestination = null; 
  bottomSheet.classList.remove('active');
  // We do NOT clear the route on click, user might want to see it while moving map
});

// Search Logic
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const found = locations.find(l => l.name.toLowerCase().includes(query));
  if (found) {
    map.flyTo([found.lat, found.lng], 19);
    openBottomSheet(found);
  }
});

// Category Filter Logic
const filterChips = document.querySelectorAll('.filter-chip');
filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    // Remove active class from all
    filterChips.forEach(c => c.classList.remove('active'));
    // Add to clicked
    chip.classList.add('active');

    const category = chip.innerText;
    loadMarkers(category);
  });
});

// Locate Me (Continuous Tracking)
const locateBtn = document.getElementById('locate-btn');
let hasHighAccuracyLock = false; // Flag to check if we have a good GPS fix

locateBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by this browser.");
    return;
  }

  if (userWatchId) {
    // If already watching, just center map to current position
    if (currentUserPos) {
      map.flyTo([currentUserPos.lat, currentUserPos.lng], 18);
    }
    return;
  }

  // Visual feedback that we are searching
  locateBtn.style.color = '#999';

  // Start watching
  userWatchId = navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const accuracy = position.coords.accuracy;
      const newLatLng = new L.LatLng(latitude, longitude);

      currentUserPos = { lat: latitude, lng: longitude };

      // Update markers
      if (userAccuracyCircle) {
        userAccuracyCircle.setLatLng(newLatLng);
        userAccuracyCircle.setRadius(accuracy);
      } else {
        userAccuracyCircle = L.circle(newLatLng, {
          radius: accuracy,
          color: '#4285F4',
          fillColor: '#4285F4',
          fillOpacity: 0.15,
          weight: 1
        }).addTo(map);
      }

      if (userMarker) {
        userMarker.setLatLng(newLatLng);
      } else {
        userMarker = L.circleMarker(newLatLng, {
          radius: 8,
          fillColor: '#4285F4',
          color: '#ffffff',
          weight: 3,
          opacity: 1,
          fillOpacity: 1
        }).addTo(map);

        // Initial fly to (even if low accuracy, at least show something)
        map.flyTo(newLatLng, 15);
      }

      // Auto-Correction Logic:
      // If we haven't locked onto a high-accuracy signal yet, and this signal is good (< 50m),
      // RE-CENTER the map. This fixes the issue where the first result is "off".
      if (!hasHighAccuracyLock && accuracy < 50) {
        map.flyTo(newLatLng, 19, { animate: true, duration: 1.5 });
        hasHighAccuracyLock = true;
        // Indicate strong lock color
        locateBtn.style.color = '#4285F4';
      }

      // Dynamic Route Update (Rerouting)
      if (currentDestination && routingControl && lastRouteUpdatePos) {
        const distMoved = lastRouteUpdatePos.distanceTo(newLatLng);
        // Update route if moved more than 15 meters to save bandwidth/performance
        // but keep it accurate enough for shortcuts
        if (distMoved > 15) {
          console.log("Updating route from new position...");
          lastRouteUpdatePos = newLatLng;
          routingControl.setWaypoints([
            newLatLng,
            L.latLng(currentDestination.lat, currentDestination.lng)
          ]);
        }
      }
    },
    (err) => {
      console.error("Location error:", err);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000
    }
  );
});

// Sidebar / Menu Logic
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const closeSidebar = document.getElementById('close-sidebar');
const legendList = document.getElementById('legend-list');

function toggleSidebar() {
  sidebar.classList.toggle('active');
}

if (menuToggle) {
  menuToggle.addEventListener('click', toggleSidebar);
}

if (closeSidebar) {
  closeSidebar.addEventListener('click', toggleSidebar);
}

// Close sidebar when clicking outside on map (optional, but good UX)
map.on('click', () => {
  if (sidebar) sidebar.classList.remove('active');
});

// Populate Sidebar Legend
function loadLegend() {
  if (!legendList) return;

  // Define the unique categories and their icons manually or extract from locations
  // Manual list ensures correct order and nice labels
  const categories = [
    { name: 'Gateway', icon: 'icons/gate.svg' },
    { name: 'Colleges', icon: 'icons/college.svg' },
    { name: 'Library', icon: 'icons/library.svg' },
    { name: 'Auditoriums', icon: 'icons/auditorium.svg' },
    { name: 'Hostels', icon: 'icons/hostel.svg' },
    { name: 'Food Court', icon: 'icons/food.svg' },
    { name: 'Sports Ground', icon: 'icons/ground.svg' },
    { name: 'Gym', icon: 'icons/gym.svg' },
    { name: 'Swimming Pool', icon: 'icons/pool.svg' },
    { name: 'Temple', icon: 'icons/temple.svg' },
    { name: 'Parks', icon: 'icons/park.svg' },
    { name: 'Admin', icon: 'icons/admin.svg' },
    { name: 'Parking', icon: 'icons/parking.svg' }
  ];

  legendList.innerHTML = ''; // Clear

  categories.forEach(cat => {
    const li = document.createElement('li');
    li.className = 'legend-item';
    li.innerHTML = `
            <img src="${cat.icon}" class="legend-icon" alt="${cat.name}">
            <span class="legend-text">${cat.name}</span>
        `;

    legendList.appendChild(li);
  });
}

// Load Legend on Init
loadLegend();
