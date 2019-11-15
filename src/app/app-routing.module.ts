import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapSampleComponent } from './map-sample/map-sample.component';
import { PlatformComponent } from './platform/platform.component';

const routes: Routes = [
  { path: 'map', component: MapSampleComponent },
  { path: 'platform', component: PlatformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
