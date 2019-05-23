import { TestBed, async, inject } from '@angular/core/testing';

import { LogGuardGuard } from "./LogGuardGuard";

describe('LogGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogGuardGuard]
    });
  });

  it('should ...', inject([LogGuardGuard], (guard: LogGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
