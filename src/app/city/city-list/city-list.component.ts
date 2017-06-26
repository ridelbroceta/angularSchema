import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { City } from '../city.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
 cities: City[];
 subscription: Subscription;
  

  constructor(private cityService: CityService, 
        private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  this.subscription = this.cityService.citiesChanged
      .subscribe(
        (cities: City[]) => {
          this.cities = cities;
        }
      );    
    this.cities = this.cityService.list();    
  }

  onNewCity() {
     this.router.navigate(['new'], {relativeTo: this.route});
  }

}
