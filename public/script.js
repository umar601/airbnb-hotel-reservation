// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// })()


// document.addEventListener("DOMContentLoaded", function () {
    
//   var map = L.map('map').setView([24.8607, 67.0011],9);

//  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 20,
//  }).addTo(map);

//  var marker = L.marker([24.8607, 67.0011]).addTo(map);




//  });


// // console.log("hello")


document.addEventListener("DOMContentLoaded", function () {
    // Check if map container exists
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.log('No map on this page');
        return;
    }
    
    // Check if Leaflet is loaded
    if (typeof L === 'undefined') {
        console.error('Leaflet library not loaded!');
        return;
    }
    
    try {
        var map = L.map('map').setView([24.8607, 67.0011], 9);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '© OpenStreetMap'
        }).addTo(map);
        var marker = L.marker([24.8607, 67.0011]).addTo(map);
        console.log('Map loaded successfully!');
    } catch (error) {
        console.error('Error initializing map:', error);
    }
});