import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxtlifeServicesComponent } from './nxtlife-services.component';

describe('NxtlifeServicesComponent', () => {
  let component: NxtlifeServicesComponent;
  let fixture: ComponentFixture<NxtlifeServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxtlifeServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxtlifeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
