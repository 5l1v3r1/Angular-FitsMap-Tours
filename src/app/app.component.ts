import { Component } from '@angular/core';
import {MarkerService} from './services/marker.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
  title: string = 'FitsMap Tours';
  //Zoom level
  zoom: number = 12;
  //Start position
  lat: number = 47.61731;
  lng: number = -122.3320708;
  //Values
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;
  //Markers
  markers: marker[];

  changeName:string = null;

  constructor(private _markerService:MarkerService){
    this.markers = this._markerService.getMarkers();
  }


  doneNaming(){
    this.changeName = null;
  }



  clickedMarker(marker:marker, index:number){
    console.log('Clicked Marker:' + marker.name+"at index" +index)
  }

  mapClicked($event:any){
    var newMarker = {
      name: 'Tour Stop',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    }
    this.markers.push(newMarker)
    this._markerService.addMarker(newMarker);

  }
  markerDragEnd(marker:any, $event:any){
    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }
    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

    this._markerService.updateMarker(updMarker, newLat, newLng);
  }

  addMarker(){
    if(this.markerDraggable == 'yes'){
      var isDraggable = true;
    }else{
      var isDraggable = false;
    }
    var newMarker = {
      name:this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable:isDraggable
    }
    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }

  removeMarker(marker){
    for(var i = 0; i < this.markers.length; i++){
      if(marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng){
        this.markers.splice(i, 1);
      }
    }
    this._markerService.removeMarker(marker);
  }

  renameMarker(marker){
    this.changeName = marker;
    for(var i = 0; i < this.markers.length; i++){
      if(marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng){
        this.markers[i].name = marker.name;
      }
    }
    this._markerService.renameMarker(marker);

  }
}

//Marker Type
interface marker{
  name? : string;
  lat: number;
  lng: number;
  draggable: boolean;
}
