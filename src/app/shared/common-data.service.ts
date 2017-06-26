import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export abstract class CommonDataService {

  elementsChanged = new Subject<any[]>();

  protected elements: any[];

  constructor() { }

  list(): any[] 
  {
      return this.elements.slice();
  }

  find(index: number) : any 
  {
    return this.elements[index];
  }

  add(newElement: any): void 
  {
    this.elements.push(newElement);
    this.elementsChanged.next(this.elements.slice());
  }

  update(index: number, element: any): void {
    this.elements[index] = element;
    this.elementsChanged.next(this.elements.slice());
  }

  delete(index: number): void {
    this.elements.splice(index, 1);
    this.elementsChanged.next(this.elements.slice());
  }
}
