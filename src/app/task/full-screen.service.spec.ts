import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';
import { FullScreenService } from './full-screen.service';
describe('FullScreenService', () => {
  let service: FullScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});