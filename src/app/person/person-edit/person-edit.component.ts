import { Component, OnInit, OnDestroy, Injector, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { PersonService } from '../person.service';


 
import { WindowModalService, MyWindowModal, MyOnCloseFromWindowModal, MyServiceForChild } from '../../window-modal/window-modal.service';

import { WindowModalComponent } from '../../window-modal/window-modal.component';




@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent  implements OnInit, OnDestroy, MyOnCloseFromWindowModal {

  idE: number;
  editMode = false;
  personForm: FormGroup;
  windowModalId: string;
  private serviceForChild: MyServiceForChild;

  constructor(windowModalService: WindowModalService, private route: ActivatedRoute,
                    private personService: PersonService, private router: Router, inj:Injector) {

              this.serviceForChild = windowModalService;         
              this.windowModalId = inj.get(WindowModalComponent).id;    
   }

  ngOnInit(): void {

     this.route.params
      .subscribe(
        (params: Params) => {
          this.idE = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );

      this.serviceForChild.open(this.windowModalId, this.editMode ? 'Edit Form' : 'Create Form', this);
  
  }



  private initForm() {
    let personSeq;
    let personName = '';
    let personLastName = '';
    let personAge;

    if (this.editMode) {
      const person = this.personService.getPerson(this.idE);
      personSeq = person.person_seq;
      personName = person.name;
      personLastName = person.lastName;
      personAge = person.age;
    }

    this.personForm = new FormGroup({
      'personSeq': new FormControl(personSeq), 
      'name': new FormControl(personName, Validators.required),
      'lastName': new FormControl(personLastName, Validators.required),
      'age': new FormControl(personAge, Validators.required),
    });
  }


onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.personService.updatePerson(this.idE, this.personForm.value);
    } else {
      this.personService.addPerson(this.personForm.value);
    }
    this.onClose();
  }

  onClose() {
    this.serviceForChild.close(this.windowModalId);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

 
    OnCloseFromWindowModal(): void {
      this.onClose(); 
  }

  ngOnDestroy(): void {
    this.serviceForChild.close(this.windowModalId);
   }

 
}
