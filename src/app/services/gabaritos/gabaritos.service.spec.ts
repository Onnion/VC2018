import { TestBed, inject } from '@angular/core/testing';

import { GabaritosService } from './gabaritos.service';

describe('GabaritosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GabaritosService]
    });
  });

  it('should be created', inject([GabaritosService], (service: GabaritosService) => {
    expect(service).toBeTruthy();
  }));
});
