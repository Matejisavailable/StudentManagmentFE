import { TestBed } from '@angular/core/testing';

import { OdborService } from './odbor.service';

describe('OdborService', () => {
  let service: OdborService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdborService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
