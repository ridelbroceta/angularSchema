import { Component, Injector} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { CityService } from '../city.service';

import { WindowModalService } from '../../window-modal/window-modal.service';

import { WindowModalComponent } from '../../window-modal/window-modal.component';

import { MyBaseToEditComponent } from '../../shared/my-cbase-to-edit-component';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent extends MyBaseToEditComponent {
  
 constructor(windowModalService: WindowModalService, cityService: CityService, 
                            route: ActivatedRoute, router: Router, inj:Injector) {

              super(windowModalService, cityService, route, router, inj);         
   }

   initForm() {
    let seq;
    let name = '';
    let code = '';

    if (this.editMode) {
      const city = this.commonDataService.find(this.idE);
      seq = city.citySeq;
      name = city.cityName;
      code = city.cityCode;
    }

    this.myForm = new FormGroup({
      citySeq: new FormControl(seq), 
      cityName: new FormControl(name, Validators.required),
      cityCode: new FormControl(code, Validators.required),
    });
  }


}
