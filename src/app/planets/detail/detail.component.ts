import { PlanetRepository } from './../planet.repository.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sw-planet-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  planet: any;

  constructor(
    private route: ActivatedRoute,
    private planetRepository: PlanetRepository
  ) { }

  ngOnInit() {
    // this.planet = 
  }

}
