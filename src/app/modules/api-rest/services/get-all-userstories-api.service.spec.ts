import { TestBed } from '@angular/core/testing';
import { GetAllUserstoriesApiService } from './get-all-userstories-api.service';
describe('GetAllUserstoriesApiService', () => {
  let service: GetAllUserstoriesApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllUserstoriesApiService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});