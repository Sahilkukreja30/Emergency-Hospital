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

// Emergency button click
document.getElementById("exportBtn").addEventListener("click", () => {
  if (userLat && userLon) {
    const locationLink = `https://maps.google.com/?q=${userLat},${userLon}`;
    const phoneNumber = "918103907611"; // replace with your phone number
    const msg = `🚨 Emergency! I need help. My location: ${locationLink}`;

    // Example: WhatsApp link
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, "_blank");

    // OR Example: SMS link
    // window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(msg)}`;

    // OR Example: Email link
    // window.location.href = `mailto:test@example.com?subject=Emergency&body=${encodeURIComponent(msg)}`;
  } else {
    alert("Location not available yet.");
  }
});
