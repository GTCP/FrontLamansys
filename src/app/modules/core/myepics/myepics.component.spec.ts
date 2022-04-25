import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyepicsComponent } from './myepics.component';

describe('MyepicsComponent', () => {
  let component: MyepicsComponent;
  let fixture: ComponentFixture<MyepicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyepicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyepicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
