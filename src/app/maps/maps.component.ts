import { Component, OnInit } from '@angular/core';
import { MapTypeStyle, MapTypeStyler } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  lat: number = -8.0573493;
  lng: number = -34.8835407;
  style =  [{"elementType": "geometry",
  "stylers": [
    {
      "color": "#f5f5f5"
    }
  ]
},
{
  "elementType": "labels.icon",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#616161"
    }
  ]
},
{
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#f5f5f5"
    }
  ]
},
{
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#bdbdbd"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#eeeeee"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#757575"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#e5e5e5"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#9e9e9e"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#ffffff"
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#757575"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#dadada"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#616161"
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#9e9e9e"
    }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#e5e5e5"
    }
  ]
},
{
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#eeeeee"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#6372ac"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#9e9e9e"
    }
  ]
}
];

  constructor() { }

  ngOnInit() {
  }

}
