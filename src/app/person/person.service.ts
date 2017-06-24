import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Person } from './person.model';


@Injectable()
export class PersonService {
   personsChanged = new Subject<Person[]>();

 private persons: Person[]  = [
        new Person( 1, 'Ridel', 'Dominguez', 37),
        new Person( 2, 'PersonName1', 'PersonLastName1', 20)
      ] ;

  constructor() { }

getPersons() {
    return this.persons.slice();
  }


getPerson(index: number) {
    return this.persons[index];
  }


addPerson(person: Person) {
    this.persons.push(person);
    this.personsChanged.next(this.persons.slice());
  }

 updatePerson(index: number, newPerson: Person) {
    this.persons[index] = newPerson;
    this.personsChanged.next(this.persons.slice());
  }

  deletePerson(index: number) {
    this.persons.splice(index, 1);
    this.personsChanged.next(this.persons.slice());
  }  
}

