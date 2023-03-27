import { TestBed } from '@angular/core/testing';

import { BaService } from './ba.service';

describe('BapService', () => {
  let service: BaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
