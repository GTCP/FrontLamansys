import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyuserstoriesComponent } from './myuserstories.component';

describe('MyuserstoriesComponent', () => {
  let component: MyuserstoriesComponent;
  let fixture: ComponentFixture<MyuserstoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyuserstoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyuserstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
