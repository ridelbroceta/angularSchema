import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { CommonDataService } from './../shared/common-data.service';

import { Person } from './person.model';

@Injectable()
export class PersonService extends CommonDataService {

  /*personsChanged = new Subject<Person[]>();

    private persons: Person[]  = [
        new Person( 1, 'Ridel', 'Dominguez', 37),
        new Person( 2, 'PersonName1', 'PersonLastName1', 20)
      ] ;*/

  constructor() {
    super();
    this.elements  = [
          new Person( 1, 'Ridel', 'Dominguez', 37),
          new Person( 2, 'PersonName1', 'PersonLastName1', 20)
        ] ;    
  }

  list(): any[] {
     return this.elements.slice();
    //throw new Error("Method not implemented.");
  }

 /* list(): any[] {
    throw new Error("Method not implemented.");
  }
  find(index: number) {
    throw new Error("Method not implemented.");
  }
  add(newElement: any): void {
    throw new Error("Method not implemented.");
  }
  update(index: number, element: any): void {
    throw new Error("Method not implemented.");
  }
  delete(index: number): void {
    throw new Error("Method not implemented.");
  }

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
  }  */
}

