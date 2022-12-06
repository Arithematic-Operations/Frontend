import { TestBed } from '@angular/core/testing';

import { SubstractionservicesService } from './substractionservices.service';

describe('SubstractionservicesService', () => {
  let service: SubstractionservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubstractionservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
