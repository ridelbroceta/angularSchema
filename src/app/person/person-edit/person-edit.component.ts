import { Component, Injector } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { CommonDataService } from '../../shared/common-data.service';

import { MyBaseToEditComponent } from '../../shared/my-cbase-to-edit-component';

//import { PersonService } from '../person.service';

import { WindowModalService } from '../../window-modal/window-modal.service';
import { WindowModalComponent } from '../../window-modal/window-modal.component';


@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent
          extends MyBaseToEditComponent  {

    constructor(windowModalService: WindowModalService, personService: CommonDataService, 
                                                  route: ActivatedRoute, router: Router, inj:Injector) {

              super(windowModalService, personService, route, router, inj);   
   }

  
   initForm() {
    let personSeq;
    let personName = '';
    let personLastName = '';
    let personAge;

    if (this.editMode) {
      const person = this.commonDataService.find(this.idE);
      personSeq = person.person_seq;
      personName = person.name;
      personLastName = person.lastName;
      personAge = person.age;
    }

    this.myForm = new FormGroup({
      'personSeq': new FormControl(personSeq), 
      'name': new FormControl(personName, Validators.required),
      'lastName': new FormControl(personLastName, Validators.required),
      'age': new FormControl(personAge, Validators.required),
    });
  }


}
