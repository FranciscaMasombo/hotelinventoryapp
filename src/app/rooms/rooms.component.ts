import { Component } from '@angular/core';
import { Room } from './rooms';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

hotelName = 'Hilton Hotel';
numberOfRooms = 4;
hiderooms = false;

rooms : Room  = {
  totalRooms: 20,
  avalableRooms: 10,
  bookedRooms: 5
}
toggle() {
  this.hiderooms = !this.hiderooms;
}

}
