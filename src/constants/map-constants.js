export const mapStyle = [
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

export function mapOptions(center, options) {
  return {
    zoom: options && options.zoom ? options.zoom : 4,
    center: new window.google.maps.LatLng(center.lat, center.lng),
    mapTypeId: window.google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: window.google.maps.ControlPosition.LEFT_BOTTOM,
    },
    streetViewControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: window.google.maps.ZoomControlStyle.SMALL,
    },
    fullscreenControl: true,
    minZoom: 4,
    maxZoom: 100,
  };
}

/* var customStyled = [
             {
                 featureType: "all",
                 elementType: "labels",
                 stylers: [
                     { visibility: "off" }
                 ]
             }
         ];//(array shown above)
         map.set('styles', customStyled); */
