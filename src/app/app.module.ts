import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
