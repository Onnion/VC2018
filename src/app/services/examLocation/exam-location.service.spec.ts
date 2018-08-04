import { TestBed, inject } from '@angular/core/testing';

import { ExamLocationService } from './exam-location.service';

describe('ExamLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamLocationService]
    });
  });

  it('should be created', inject([ExamLocationService], (service: ExamLocationService) => {
    expect(service).toBeTruthy();
  }));
});
