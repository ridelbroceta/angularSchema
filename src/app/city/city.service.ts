import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { CommonDataService } from './../shared/common-data.service';

import { City } from './city.model';


@Injectable()
export class CityService extends CommonDataService {

   citiesChanged = new Subject<City[]>();

   private cities: City[]  = [
        new City( 1, 'West Palm Beach', 'WPB'),
        new City( 2, 'Miami', 'Miami')
      ] ;

  constructor() 
  {
       super();
        this.elements  = [
                new City( 1, 'West Palm Beach', 'WPB'),
                new City( 2, 'Miami', 'Miami')
            ] ;        
   }

 
}
