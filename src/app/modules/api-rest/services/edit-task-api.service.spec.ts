import { TestBed } from '@angular/core/testing';
import { EditTaskApiService } from './edit-task-api.service';
describe('EditTaskApiService', () => {
  let service: EditTaskApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTaskApiService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});