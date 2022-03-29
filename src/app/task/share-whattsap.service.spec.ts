import { TestBed } from '@angular/core/testing';

import { ShareWhattsapService } from './share-whattsap.service';

describe('ShareWhattsapService', () => {
  let service: ShareWhattsapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareWhattsapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
