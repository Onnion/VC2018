import { TestBed, inject } from '@angular/core/testing';

import { AprovedsService } from './aproveds.service';

describe('AprovedsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AprovedsService]
    });
  });

  it('should be created', inject([AprovedsService], (service: AprovedsService) => {
    expect(service).toBeTruthy();
  }));
});
