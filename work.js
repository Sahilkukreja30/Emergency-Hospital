let userLat = null;
let userLon = null;

// Initialize the map
const map = L.map('map').setView([0, 0], 2);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Get user's location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLat = position.coords.latitude;
      userLon = position.coords.longitude;

      // Center map
      map.setView([userLat, userLon], 15);

      // Add marker
      L.marker([userLat, userLon]).addTo(map)
        .bindPopup("You are here 📍")
        .openPopup();
    },
    () => alert("Unable to retrieve your location.")
  );
} else {
  alert("Geolocation not supported.");

  
}

const emergencyBtn = document.getElementById("exportBtn");
const alertBox = document.getElementById("alertBox");
const siren = document.getElementById("siren");

emergencyBtn.addEventListener("click", () => {
  alertBox.style.display = "block";   
  siren.play();                       

  setTimeout(() => {
    alertBox.style.display = "none";  
    siren.pause();                    
    siren.currentTime = 0;           
  }, 4000); 
});


