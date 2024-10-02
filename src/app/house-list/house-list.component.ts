import { Component } from '@angular/core';
import { HOUSES } from '../houses';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent {
  houses = HOUSES;
}
