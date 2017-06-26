//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { /*FormsModule,*/ ReactiveFormsModule } from '@angular/forms';

import { RouterModule  } from '@angular/router';

import { CommonDataService } from '../shared/common-data.service';

import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonStartComponent } from './person-start/person-start.component';
import { PersonTestComponent } from './person-test/person-test.component';

import { PersonService } from './person.service';

//import { WindowModalComponent } from './../window-modal/window-modal.component';
//import { WindowModalService } from './../window-modal/window-modal.service';
import { WindowModalModule } from './../window-modal/window-modal.module';






@NgModule({
  declarations: [
    PersonComponent,
    PersonListComponent,
    PersonEditComponent,
    PersonStartComponent,
    PersonTestComponent,
    //WindowModalComponent,
  ],
  imports: [
   // BrowserModule,
    CommonModule,
    RouterModule,
    //FormsModule,
    ReactiveFormsModule,
    WindowModalModule,
  ],
  providers: [
    { provide: CommonDataService, useClass: PersonService },
    //WindowModalService,
  ],
})
export class PersonModule { }
