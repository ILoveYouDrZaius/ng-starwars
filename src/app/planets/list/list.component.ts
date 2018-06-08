import { PlanetRepository } from './../planet.repository.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'sw-planet-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  loading: boolean;

  planets: Observable<any[]>;
  totalPlanets: Observable<number>;
  pageSize: number = 5;
  currentPage: number;

  // totalPlanets: number = 0;
  // totalPlanetsSubscription: Subscription;

  // planets: any[] = [];
  // planetsSubscription;

  constructor(private planetRepository: PlanetRepository) { }

  ngOnInit() {
    this.load(1);
  }

  load(page: number) {
    this.loading = true;
    this.currentPage = page;

    this.totalPlanets = this.planetRepository.count();

    this.planets = this.planetRepository.list(this.currentPage, this.pageSize)
      .pipe(
        tap(() => {
          this.loading = false;
        })
      );

    // this.planetsSubscription = this.planetRepository
    //   .list(page)
    //   .subscribe(
    //     data => {
    //       this.planets = data;
    //       this.loading = false;
    //     }
    //   );

    //   this.totalPlanetsSubscription = this.planetRepository
    //     .count()
    //     .subscribe(
    //       data => {
    //         this.totalPlanets = data;
    //       }
    //     );
  }

  ngOnDestroy() {
    // this.planetsSubscription.unsubscribe();
    // this.totalPlanetsSubscription.unsubscribe();
  }

  onPage({ pageSize, pageIndex }) {
    this.pageSize = pageSize;

    this.load(pageIndex + 1);
  }

}
