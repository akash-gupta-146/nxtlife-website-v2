import { TestBed, inject } from '@angular/core/testing';

import { LemService } from './lem.service';

describe('LemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LemService]
    });
  });

  it('should be created', inject([LemService], (service: LemService) => {
    expect(service).toBeTruthy();
  }));
});
