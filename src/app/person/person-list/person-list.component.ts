import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Person } from '../person.model';
import { PersonService } from '../person.service';
//import { WindowModalService } from '../../window-modal/window-modal.service';


//declare var $: any;

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit{
 persons: Person[];
 subscription: Subscription;
  

  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.subscription = this.personService.personsChanged
      .subscribe(
        (persons: Person[]) => {
          this.persons = persons;
        }
      );    
    this.persons = this.personService.getPersons();
  }

 onNewPerson() {
    //this.router.navigate(['new'], {relativeTo: this.route});
    //$('#myModal').modal('show')
    //alert('Ok');
     this.router.navigate(['new'], {relativeTo: this.route});
     //this.windowModalService.open(id);
  }

}
