import { TestBed } from '@angular/core/testing';

import { AugService } from './aug.service';

describe('AugService', () => {
  let service: AugService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AugService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
