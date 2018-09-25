console.log("Can you see me?");
const buildMarker = require("./marker");
const mapboxgl = require("mapbox-gl");


buildMarker("access", [-87.6534, 41.8885]); // or [-87.6354, 41.8885]
buildMarker("activities", [-87.641, 41.8959]);
buildMarker("hotels", [-87.6654, 41.9000]);
buildMarker("restaurants", [-87.6432, 41.8855]);
//module.exports = map;