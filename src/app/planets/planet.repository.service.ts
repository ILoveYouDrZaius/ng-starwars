import { Injectable } from '@angular/core';
import { PlanetsModule } from './planets.module';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';


const BASE_URL = 'http://localhost:3000/planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetRepository {

  constructor(private http: HttpClient) { }

  public list(page: number = 1, limit: number = 5): Observable<any> {
    const  params = new HttpParams()
      .set('_page', `${page}`)
      .set('_limit', `${limit}`);

    return this.http.get(BASE_URL, { params });
  }

  public count(): Observable<number> {
    return this.http.get(BASE_URL)
      .pipe(
        map((planets: any[]) => planets.length)
      );
  }

  public findOne(id: number) {
    const url = `${BASE_URL}/${id}`;
    this.http.get(url);
  }
}
