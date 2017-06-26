//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CityComponent } from './city.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityStartComponent } from './city-start/city-start.component';
import { CityEditComponent } from './city-edit/city-edit.component';

import { CityService } from './city.service';


//import { WindowModalService } from './../window-modal/window-modal.service';
import { WindowModalModule } from './../window-modal/window-modal.module';


@NgModule({

  imports: [
    CommonModule,
    //BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    WindowModalModule,    
  ],
  declarations: [
    CityComponent,
    CityListComponent,
    CityStartComponent,
    CityEditComponent,    
  ],
  providers: [
    CityService,
    //WindowModalService,
  ],
  
})
export class CityModule { }
