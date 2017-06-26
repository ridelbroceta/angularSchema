import { TestBed, inject } from '@angular/core/testing';

import { CommonDataService } from './common-data.service';

describe('CommonDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonDataService]
    });
  });

  it('should be created', inject([CommonDataService], (service: CommonDataService) => {
    expect(service).toBeTruthy();
  }));
});
