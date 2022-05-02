import { TestBed } from '@angular/core/testing';

import { FakultaService } from './fakulta.service';

describe('FakultaService', () => {
  let service: FakultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
