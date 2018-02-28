import { TestBed, inject } from '@angular/core/testing';

import { SemService } from './sem.service';

describe('SemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemService]
    });
  });

  it('should be created', inject([SemService], (service: SemService) => {
    expect(service).toBeTruthy();
  }));
});
