/* interactive map */

/*var markers = [
    {latLng: [52.4, 13.8], name: 'Grünheide'},
    {latLng: [50.8797, 6.5651], name: 'Hambacher Forst'},
    {latLng: [50.773333, 9.023333], name: 'Dannenröder Forst'},
];*/

function escapeXml(string) {
  return string.replace(/[<>]/g, function (c) {
    switch (c) {
      case '<': return '\u003c';
      case '>': return '\u003e';
    }
  });
}


jQuery(document).ready(function () {

    var pins = {
      bb: escapeXml('<div class="map-pin green"><span></span></div>'),
      nw: escapeXml('<div class="map-pin green"><span</span></div>'),
      he: escapeXml('<div class="map-pin green"><span></span></div>')
    };

    jQuery('#vmap').vectorMap({
      map: 'germany_en',
      scaleColors: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial',
      hoverOpacity: 0.7,
      pins: pins,
      pinMode: 'content',
      scaleColor: 'green',
      selectedRegions: ['Grünheide','Hambacher Forst','Dannenröder Forst'],
      showTooltip: true,
      hoverColor: true,
      backgroundColor: 'rgb(58, 50, 50)',
      /*colors: {
        bb: 'rgb(55, 245, 55)',
        ni: 'rgb(55, 245, 55)',
        he: 'rgb(55, 245, 55)',
      },*/
      /*markerStyle: {
        initial: {
          fill: 'rgb(55, 245, 55)',
          stroke: '#383f47'
        }
      },*/
      /*markers: [
        {latLng: [52.4, 13.8], name: 'Grünheide'},
        {latLng: [50.8797, 6.5651], name: 'Hambacher Forst'},
        {latLng: [50.773333, 9.023333], name: 'Dannenröder Forst'},
      ],*/
    });
  });

/*
  function addMapPoint(lat, lon, title){
    removeMapPoint();
    var map = $('#vmap').vectorMap('get', 'mapObject'); 
    map.addMarkers([{ latLng: [lat, lon], name: title }], []);
}*/

/* interactive map end */

