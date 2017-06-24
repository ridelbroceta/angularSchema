import { TestBed, inject } from '@angular/core/testing';

import { WindowModalService } from './window-modal.service';

describe('WindowModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowModalService]
    });
  });

  it('should be created', inject([WindowModalService], (service: WindowModalService) => {
    expect(service).toBeTruthy();
  }));
});
