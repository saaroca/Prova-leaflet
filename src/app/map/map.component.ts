import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { freeBus, lightRailStop, bicycleRental, campus, coorsField } from '../../assets/js/sample-geojson.js';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit {
  public map;
 
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  onEachFeature(feature, layer) {
    var popupContent = "<p>He començat com a GeoJSON " +
      feature.geometry.type + ", Però ara sóc un vector de leaflet!</p>";

    if (feature.properties && feature.properties.popupContent) {
      popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [42.180835, 2.486769],
      zoom: 16
    });

    const tiles = 	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/light-v9',
      tileSize: 512,
      zoomOffset: -1
    });

    tiles.addTo(this.map);
    L.geoJSON([bicycleRental, campus], {

      style: function (feature) {
        return feature.properties && feature.properties.style;
      },
    
      onEachFeature: this.onEachFeature,
    
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 8,
          fillColor: "#ff7800",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        });
      }
    })

    L.geoJSON(freeBus, {

  filter: function (feature, layer) {
    if (feature.properties) {
      // If the property "underConstruction" exists and is true, return false (don't render features under construction)
      return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
    }
    return false;
  },

  onEachFeature: this.onEachFeature
}).addTo(this.map);


  const coorsLayer = L.geoJSON(coorsField, {

    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {icon: baseballIcon});
    },
  
    onEachFeature: this.onEachFeature
  }).addTo(this.map); 

  }
};

var baseballIcon = L.icon({
  iconUrl: '/Content/images/tenis.jpg',
  iconSize: [32, 37],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});












