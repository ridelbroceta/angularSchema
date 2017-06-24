import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonStartComponent } from './person-start.component';

describe('PersonStartComponent', () => {
  let component: PersonStartComponent;
  let fixture: ComponentFixture<PersonStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
