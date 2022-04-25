import { TestBed } from '@angular/core/testing';
import { GetTasksApiService } from './get-tasks-api.service';
describe('GetTasksApiService', () => {
  let service: GetTasksApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTasksApiService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});