import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateBobineFem } from './calculate-bobine-fem';

describe('CalculateBobineFem', () => {
  let component: CalculateBobineFem;
  let fixture: ComponentFixture<CalculateBobineFem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateBobineFem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateBobineFem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
