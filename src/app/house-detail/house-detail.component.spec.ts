import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HOUSES } from '../houses';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.house = HOUSES.find(h => h.id === id);
  }
}
