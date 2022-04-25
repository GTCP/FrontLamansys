import { TestBed } from '@angular/core/testing';
import { GetProjectByIdApiService } from './get-project-by-id-api.service';
describe('GetProjectByIdApiService', () => {
  let service: GetProjectByIdApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProjectByIdApiService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});