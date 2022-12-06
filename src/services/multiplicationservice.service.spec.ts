import { TestBed } from '@angular/core/testing';

import { MultiplicationserviceService } from './multiplicationservice.service';

describe('MultiplicationserviceService', () => {
  let service: MultiplicationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplicationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
