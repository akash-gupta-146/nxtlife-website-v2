import { TestBed, inject } from '@angular/core/testing';

import { QualityAssuranceService } from './quality-assurance.service';

describe('QualityAssuranceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QualityAssuranceService]
    });
  });

  it('should be created', inject([QualityAssuranceService], (service: QualityAssuranceService) => {
    expect(service).toBeTruthy();
  }));
});
