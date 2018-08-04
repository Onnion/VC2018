import { TestBed, inject } from '@angular/core/testing';

import { ProvasService } from './provas.service';

describe('ProvasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvasService]
    });
  });

  it('should be created', inject([ProvasService], (service: ProvasService) => {
    expect(service).toBeTruthy();
  }));
});
