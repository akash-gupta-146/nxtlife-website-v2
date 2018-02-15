import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LemComponent } from './lem.component';

describe('LemComponent', () => {
  let component: LemComponent;
  let fixture: ComponentFixture<LemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
