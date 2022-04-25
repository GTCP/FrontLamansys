import { TestBed } from '@angular/core/testing';
import { DeleteTaskApiService } from './delete-task-api.service';
describe('DeleteTaskApiService', () => {
  let service: DeleteTaskApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteTaskApiService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});