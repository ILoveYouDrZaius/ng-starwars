import { MaterialModule } from './../shared/MaterialModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [PlanetsComponent, ListComponent, DetailComponent]
})
export class PlanetsModule { }
