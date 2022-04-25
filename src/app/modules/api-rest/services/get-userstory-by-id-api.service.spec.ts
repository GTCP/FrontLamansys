import { TestBed } from '@angular/core/testing';
import { GetUserstoryByIdApiService } from './get-userstory-by-id-api.service';
describe('GetUserstoryByIdApiService', () => {
  let service: GetUserstoryByIdApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserstoryByIdApiService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});