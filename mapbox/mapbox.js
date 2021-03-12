mapboxgl.accessToken = 'pk.eyJ1IjoiZnJvemVuMTIwNCIsImEiOiJja2x6azl6YnUzdjFxMm9uMXE2YmI5MGt3In0.k0dMLg1Ea6yQH1kwIHzlOQ';
      var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/frozen1204/cklznsrga6zso17o4rrjz7nsv',
      center:[10.324,51.203],
      zoom:5.61
      });

map.on('load', () => {
   map.addSource('pointsSource', {
         'type': 'geojson',
         'data': {
               "type": "FeatureCollection",
               "features": [
                   {
                     "type": "Feature",
                     "properties": {
                           "head": "Hambacher Forst",
                           "text": "Beispieltext 3",
                           "link" : "../projects/hambacherForst.html",
                           "site": "Hier",
                           "img": "../images/hambacher_forst.jpg",
                     },
                     "geometry": {
                           "type": "Point",
                           "coordinates": [
                              6.502778,
                              50.910833
                           ]
                       }
                   },
                   {
                        "type": "Feature",
                        "properties": {
                              "head": "Grünheide",
                              "text": "Beispieltext 2",
                              "link" : "../projects/gruenheide.html",
                              "site": "Hier",
                              "img": "../images/tesla_gruenheide.jpg",
                        },
                        "geometry": {
                              "type": "Point",
                              "coordinates": [
                                    13.8,
                                    52.4
                                  ]
                             }
                        },
                        {
                              "type": "Feature",
                              "properties": {
                                    "head": "Dannenröder Forst",
                                    "text": "Beispieltext 1",
                                    "link" : "../projects/dannenröderForst.html",
                                    "site": "Hier",
                                    "img": "../images/dannenroeder_forst.jpg",
                              },
                              "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                          9.023333,
                                          50.773333
                                        ]
                                    }
                              },    
                  ]
           }
    });
    
    map.addLayer({
      id: 'points',
      source: 'pointsSource',
      type: 'circle',
      paint: {
            'circle-radius': 10,
            'circle-color': 'red'
      }
   });
});

map.on('click', e => {
      const result = map.queryRenderedFeatures(e.point, { layers: ['points']});
      if (result.length) {
            const popup = new mapboxgl.Popup({ closeButton: false });
            const head = result[0].properties.head;
            const text = result[0].properties.text;
            const link = result[0].properties.link;
            const site = result[0].properties.site;
            const img = result[0].properties.img;
            const alt = result[0].properties.alt
            popup.setLngLat(e.lngLat)
               .setHTML(`<h1>${head}</h1><p><img src="${img}" alt=""></p><p><a href="${link}">${site}</a> kommen sie auf die Projekt-Seite</p>`)
               .addTo(map)
      }
});
