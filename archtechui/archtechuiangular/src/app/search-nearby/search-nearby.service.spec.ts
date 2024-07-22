import { TestBed } from '@angular/core/testing';

import { SearchNearbyService } from './search-nearby.service';

describe('SearchNearbyService', () => {
  let service: SearchNearbyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchNearbyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
