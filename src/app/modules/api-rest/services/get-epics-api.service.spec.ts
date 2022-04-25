import { TestBed } from '@angular/core/testing';
import { GetEpicsApiService } from './get-epics-api.service';
describe('GetEpicsApiService', () => {
  let service: GetEpicsApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEpicsApiService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});