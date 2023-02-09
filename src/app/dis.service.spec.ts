import { TestBed } from '@angular/core/testing';

import { DisService } from './dis.service';

describe('DisService', () => {
  let service: DisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
