import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapSampleComponent } from './map-sample/map-sample.component';

const routes: Routes = [
  { path: 'map', component: MapSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
