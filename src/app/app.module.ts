import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CabsListComponent } from './cabs-list/cabs-list.component';
import { RidePageComponent } from './ride-page/ride-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CabsListComponent,
    RidePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
