import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

display: any;
center: google.maps.LatLngLiteral = {
    lat: 47.883331,
    lng: 1.83333
};
 zoom = 11;

/*------------------------------------------
--------------------------------------------
moveMap()
--------------------------------------------
--------------------------------------------*/
 moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.center = (event.latLng.toJSON());
    }
}

/*------------------------------------------
--------------------------------------------
move()
--------------------------------------------
--------------------------------------------*/

move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
}
}