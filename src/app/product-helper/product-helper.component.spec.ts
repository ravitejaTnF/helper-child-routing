import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHelperComponent } from './product-helper.component';

describe('ProductHelperComponent', () => {
  let component: ProductHelperComponent;
  let fixture: ComponentFixture<ProductHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
