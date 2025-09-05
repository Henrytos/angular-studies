import { TestBed } from '@angular/core/testing';

import { ListAllAnimesTop } from './list-all-animes-top';

describe('ListAllAnimesTop', () => {
  let service: ListAllAnimesTop;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAllAnimesTop);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
