import { TestBed } from '@angular/core/testing';

import { JanService } from './jan.service';

describe('JanService', () => {
  let service: JanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
