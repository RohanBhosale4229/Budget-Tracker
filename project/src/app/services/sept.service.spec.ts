import { TestBed } from '@angular/core/testing';

import { SeptService } from './sept.service';

describe('SeptService', () => {
  let service: SeptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
