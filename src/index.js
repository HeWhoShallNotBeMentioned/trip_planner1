console.log("Can you see me?");
const buildMarker = require("./marker");
const mapboxgl = require("mapbox-gl");


mapboxgl.accessToken = 'pk.eyJ1IjoiY3VuZGVyd29vZG1uIiwiYSI6ImNqbWk1dGFsYTAxa2YzcW9jY2FkdThramEifQ.IDp26x6pnPbrJntBnG2-5w';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div');
markerDomEl.style.width = '32px';
markerDomEl.style.minHeight = '32px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);

const marker = buildMarker("hotels", [-87.6534, 41.8885]); // or [-87.6354, 41.8885]
marker.addTo(map);

module.exports = map;