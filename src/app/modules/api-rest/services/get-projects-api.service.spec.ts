import { TestBed } from '@angular/core/testing';
import { GetProjectsApiService } from './get-projects-api.service';
describe('GetProjectsApiService', () => {
  let service: GetProjectsApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProjectsApiService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});