import { TestBed } from '@angular/core/testing';

import { JulService } from './jul.service';

describe('JulService', () => {
  let service: JulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
