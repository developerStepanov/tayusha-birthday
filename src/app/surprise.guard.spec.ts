import { TestBed } from '@angular/core/testing';

import { SurpriseGuard } from './surprise.guard';

describe('SurpriseGuard', () => {
  let guard: SurpriseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SurpriseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
