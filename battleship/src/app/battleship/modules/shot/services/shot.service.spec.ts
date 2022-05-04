import { TestBed } from '@angular/core/testing';

import { ShotService } from './shot.service';

describe('ShotService', () => {
  let service: ShotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
