import { TestBed, inject } from '@angular/core/testing';

import { StrategicPlanningService } from './strategic-planning.service';

describe('StrategicPlanningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StrategicPlanningService]
    });
  });

  it('should be created', inject([StrategicPlanningService], (service: StrategicPlanningService) => {
    expect(service).toBeTruthy();
  }));
});
