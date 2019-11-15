import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import {TransferHttpCacheModule} from '@nguniversal/common';
import { MapSampleComponent } from './map-sample/map-sample.component';
import { PlatformComponent } from './platform/platform.component';

@NgModule({
  declarations: [
    AppComponent,
    MapSampleComponent,
    PlatformComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    HttpClientModule,
    BrowserTransferStateModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'XXXXXXXXXXXXXXXXXXXXXX'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
