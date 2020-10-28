import { AfterViewInit, Component, Pipe, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { TPO, PuntsInteres, ParcNou, Icona } from '../../assets/js/sample-geojson.js';
import './js/leaflet-sidebar.js'
import { NgxSidebarControlComponent } from '@runette/ngx-leaflet-sidebar'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent {

  public map;
  public sidebar;
  public sidebarPointList;

  mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
  mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private markerIcon = L.icon({
    iconSize: [12, 21],
    iconAnchor: [6, 21],
    iconUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png',
    shadowSize: [12, 21],
    shadowAnchor: [6, 21],
    shadowUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-shadow.png'
  });


  //sidebar variables
  public showLegend: boolean;
  public legendUrl: SafeResourceUrl;
  private panelContent: L.Control.PanelOptions = {
    id: 'text',
    tab: '<i class="material-icons" title="text">description</i>',
    position: 'top',
    title: 'Caracetrístiques meteorològiques',
    pane: ''
  }

  public sidebarOptions: L.SidebarOptions = {
    position: 'right',
    autopan: true,
    closeButton: true,
    container: 'sidebar',
  }

  public sidebarPointListOptions: L.SidebarOptions = {
    position: 'left',
    autopan: true,
    closeButton: true,
    container: 'sidebarPointList',
  }

  onEachFeature(feature, layer) {
    var popupContent = "<p>He començat com a GeoJSON " +
      feature.geometry.type + ", Però ara sóc un vector de leaflet!</p>";

    if (feature.properties && feature.properties.popupContent) {
      popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
  }


  MGris = L.tileLayer(this.mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: this.mbAttr });
  Carrers = L.tileLayer(this.mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: this.mbAttr });

  private initMap(): void {
    this.map = L.map('map', {
      center: [42.180835, 2.486769],
      layers: [this.MGris],
      zoom: 16
    });


    var Mapes = {
      "Mapa Gris": this.MGris,
      "Mapa Carrers": this.Carrers
    };


    L.control.layers(Mapes).addTo(this.map);


    L.geoJSON([PuntsInteres, ParcNou], {

      style: function (feature) {
        return feature.properties && feature.properties.style;
      },


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
    }).addTo(this.map).on('click', this.onClick, this);;

    L.geoJSON(TPO, {

      filter: function (feature, layer) {
        if (feature.properties) {
          // If the property "underConstruction" exists and is true, return false (don't render features under construction)
          return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
        }
        return false;
      },

      onEachFeature: this.onEachFeature
    }).addTo(this.map);


    L.geoJSON(Icona, {

      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: baseballIcon });
      },

      onEachFeature: this.onEachFeature
    }).addTo(this.map);

    this.sidebarPointList = L.control.sidebar('sidebarPointList', {
      closeButton: true,
      position: 'left',
      container: 'sidebarPointList',
      autopan: true
    });

    this.sidebar = L.control.sidebar('sidebar', {
      closeButton: true,
      position: 'right',
      container: 'sidebar',
      autopan: true
    });

    this.map.addControl(this.sidebarPointList);
    this.map.addControl(this.sidebar);
  }


  @ViewChild(NgxSidebarControlComponent, { static: false })  NgxSidebarControlComponent;

  onClick(data, feature) {
    const sidebar = this.sidebar;
    sidebar.removePanel('text');
    let content=data.sourceTarget.feature.properties.popupContent;
    let panelHtml = `<h1>${content} </h1>`
    this.panelContent.pane = panelHtml;
    sidebar.addPanel(this.panelContent);
    sidebar.open('text');
  }


};

var baseballIcon = L.icon({
  iconUrl: '/assets/images/tenis.jpg',
  iconSize: [32, 37],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});












