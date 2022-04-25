import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyallstoriesComponent } from './myallstories.component';

describe('MyallstoriesComponent', () => {
  let component: MyallstoriesComponent;
  let fixture: ComponentFixture<MyallstoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyallstoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyallstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
