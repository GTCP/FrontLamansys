import { TestBed } from '@angular/core/testing';
import { GetUserstoriesApiService } from './get-userstories-api.service';
describe('GetUserstoriesApiService', () => {
  let service: GetUserstoriesApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserstoriesApiService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});