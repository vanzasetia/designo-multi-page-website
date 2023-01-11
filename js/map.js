(function () {
  "use strict";
  const mapOptions = (mapCoordinates) => {
    return {
      center: mapCoordinates,
      zoom: 20,
      zoomControl: false,
      attributionControl: false
    };
  };
  const mapCoordinatesCanada = [43.6465, -79.38355];
  const mapCoordinatesAustralia = [-30.31998, 149.78324];
  const mapCoordinatesUK = [53.7097, -1.34114];

  const mapCanada = L.map("js-map-canada", mapOptions(mapCoordinatesCanada));
  const mapAustralia = L.map(
    "js-map-australia",
    mapOptions(mapCoordinatesAustralia)
  );
  const mapUK = L.map("js-map-uk", mapOptions(mapCoordinatesUK));

  // Decorative maps
  const mapContainers = document.querySelectorAll(".js-map");
  mapContainers.forEach((map) => {
    map.setAttribute("inert", "");

    // Hide the <picture> element visually
    // to give width and height to the map
    map.querySelector("picture").classList.add("is-hidden");
  });

  const maps = [mapCanada, mapAustralia, mapUK];
  maps.forEach((map) => {
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );
  });
})();
