import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityStartComponent } from './city-start.component';

describe('CityStartComponent', () => {
  let component: CityStartComponent;
  let fixture: ComponentFixture<CityStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
