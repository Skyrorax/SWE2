/* interactive map */

jQuery(document).ready(function () {
    var plants = [
        {name: 'Grünheide', coords: [52.4, 13.8]},
        {name: 'Hambacher Forst', coords: [50.8797, 6.5651]},
        {name: 'Dannenröder Forst', coords: [50.773333, 9.023333]},
    ]
    jQuery('#vmap').vectorMap({
      map: 'germany_en',
      scaleColors: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial',
      hoverOpacity: 0.7,
      hoverColor: false,
      markerStyle: {
        initial: {
          fill: 'rgb(55, 245, 55)',
          stroke: '#383f47'
        }
      },
      backgroundColor: 'rgb(58, 50, 50)',
      markers: plants.map(function(h){ return {name: h.name, latLng: h.coords} })
    });
  });

/* interactive map end */