import { TestBed } from '@angular/core/testing';

import { CalculateBobineFemService } from './calculate-bobine-fem-service';

describe('CalculateBobineFemService', () => {
  let service: CalculateBobineFemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateBobineFemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
