import { TestBed } from '@angular/core/testing';

import { SsrGuard } from './ssr.guard';

describe('SsrGuard', () => {
  let guard: SsrGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SsrGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
