import { TestBed } from '@angular/core/testing';
import { GetEpicByIdApiService } from './get-epic-by-id-api.service';
describe('GetEpicByIdApiService', () => {
  let service: GetEpicByIdApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEpicByIdApiService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});