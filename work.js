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


const alertBox = document.getElementById("alertBox");


document.getElementById("exportBtn").addEventListener("click", () => {
  // Create audio element
  const audio = new Audio("fx-police(chosic.com).mp3"); // put siren.mp3 in same folder
  audio.play().catch(err => {
    console.log("Audio blocked:", err);
  });

  // Show alert popup
  alertBox.style.display = "block";

  // Stop after 10 seconds
  setTimeout(() => {
    alertBox.style.display = "none";
    audio.pause();
    audio.currentTime = 0;
  }, 4000);
});



