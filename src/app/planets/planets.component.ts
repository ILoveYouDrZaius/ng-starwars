import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: any = [];

  constructor() { }

  ngOnInit() {
  }

}
