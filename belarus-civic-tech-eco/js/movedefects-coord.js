// initialize Leaflet
var map = L.map('map').setView([52.4251406, 30.9808249], 12);

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

// show a marker on the map
var movedefectIcon = L.icon({
    iconUrl: 'img/greenpoint.png',
    iconSize: [35, 40],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

function onEachFeature(feature, layer) {
    var popupContent = "<p>В этом чате пользователи могут общаться по вопросам ухода и роста посаженных деревьв <br> <a href = 'https://e-dem.tools/6110100000'>Чат для обсуждения по уходу и отслеживания посаженных деревьев</a></p>";
    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
};

L.geoJSON(movementDefects, {

    style: function(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, { icon: movedefectIcon });
    }
}).addTo(map);