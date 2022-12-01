import { TestBed } from '@angular/core/testing';

import { MemoriService } from './memori.service';

describe('MemoriService', () => {
  let service: MemoriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
