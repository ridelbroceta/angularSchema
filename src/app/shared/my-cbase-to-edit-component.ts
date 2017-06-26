import { OnInit, OnDestroy, Injector, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { CommonDataService } from './common-data.service';

import { WindowModalComponent } from '../window-modal/window-modal.component';
import { WindowModalService } from '../window-modal/window-modal.service';
import { MyWindowModal, MyOnCloseFromWindowModal, MyServiceForChild } from '../window-modal/my-ibase-to-window-modal';

export abstract class MyBaseToEditComponent implements OnInit, OnDestroy, MyOnCloseFromWindowModal {

    idE: number;
    editMode = false;
    myForm: FormGroup;
    windowModalId: string;
    protected serviceForChild: MyServiceForChild;

    constructor(windowModalService: WindowModalService, protected commonDataService: CommonDataService, 
                 protected route: ActivatedRoute, protected router: Router, private inj:Injector) {

                this.serviceForChild = windowModalService;         
    }


    protected abstract initForm() : void;

    OnCloseFromWindowModal(): void {
        this.onClose(); 
    }

    ngOnDestroy(): void {
        this.serviceForChild.close(this.windowModalId);
    }

    ngOnInit(): void {
        this.windowModalId = this.inj.get(WindowModalComponent).id;    

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

  onClose() {
    this.serviceForChild.close(this.windowModalId);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
   
  onSubmit() {
    if (this.editMode) {
      this.commonDataService.update(this.idE, this.myForm.value);
    } else {
      this.commonDataService.add(this.myForm.value);
    }
    this.onClose();
  }

  onDelete() {
    this.commonDataService.delete(this.idE);  
    this.onClose();
  }
 
}
