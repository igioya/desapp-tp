import { Component, OnInit, ViewChild } from '@angular/core';
import { PublicationService } from '../services/publication.service';
import { AuthenticationService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  publications

  constructor(private publicationService: PublicationService,
              private authService: AuthenticationService,
              public router: Router,
              private location: Location) { }

  ngOnInit() {
    this.getPublications();
  }

  initMap(){
    var mapProp = {
      center: new google.maps.LatLng(-34.7064781 , -58.2716504),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.publications.forEach(publication => {
      this.initMarker(publication.retireAddress, publication.id);      
    });
  }

  getPublications() {
    this.publicationService.getAllPublications().subscribe(data => { 
      this.publications = data;
      this.initMap();
    }, err => {},
       () => {}
    );
  }

  initMarker(address, publicationId){
    let contentString = "<a href='publicationDetail/"+publicationId+"'>Show publication</a> ";
    let self = (this);
    let geocoder = new google.maps.Geocoder();
    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    geocoder.geocode({'address': address}, function(results, status) {
      let latLng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng())
      let marker = new google.maps.Marker({
        position: latLng,
        map: self.map,
        title: 'Click to zoom'
      });
      marker.addListener('click', function() {
          infowindow.open(self.map, marker);
      });
    });
  }
}