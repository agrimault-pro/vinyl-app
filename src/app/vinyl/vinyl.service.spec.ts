import { TestBed } from '@angular/core/testing';

import { VinylService } from './vinyl.service';

describe('VinylService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VinylService = TestBed.get(VinylService);
    expect(service).toBeTruthy();
  });
});
