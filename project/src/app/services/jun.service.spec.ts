import { TestBed } from '@angular/core/testing';

import { JunService } from './jun.service';

describe('JunService', () => {
  let service: JunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
