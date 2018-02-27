import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductThemeComponent } from './product-theme.component';

describe('ProductThemeComponent', () => {
  let component: ProductThemeComponent;
  let fixture: ComponentFixture<ProductThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
