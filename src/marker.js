const mapboxgl = require("mapbox-gl");
const map = require('./index');

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
  console.log("coords ", coords);
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.minHeight = '32px';
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
  new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);


};

module.exports = buildMarker;