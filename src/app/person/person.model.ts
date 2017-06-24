export class Person {
  public person_seq: number;
  public name: string;
  public lastName: string;
  public age: number;

  constructor(person_seq: number, name: string, lastName: string, age: number ) {
    this.person_seq = person_seq;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

}
