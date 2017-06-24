import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowModalComponent } from './window-modal.component';

describe('WindowModalComponent', () => {
  let component: WindowModalComponent;
  let fixture: ComponentFixture<WindowModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
