import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicPlanningComponent } from './strategic-planning.component';

describe('StrategicPlanningComponent', () => {
  let component: StrategicPlanningComponent;
  let fixture: ComponentFixture<StrategicPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
