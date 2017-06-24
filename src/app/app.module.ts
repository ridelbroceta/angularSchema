import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

//import { WindowModalComponent } from './window-modal/window-modal.component';

import { PersonModule } from './person/person.module';
//import { PersonComponent } from './person/person.component';

import { CityModule } from './city/city.module';
//import { CityComponent } from './city/city.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    //WindowModalComponent,
    //PersonComponent,
    //CityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonModule,
    CityModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
