import { TestBed } from '@angular/core/testing';

import { NovService } from './nov.service';

describe('NovService', () => {
  let service: NovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
