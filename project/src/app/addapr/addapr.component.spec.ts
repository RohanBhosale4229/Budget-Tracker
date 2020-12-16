import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaprComponent } from './addapr.component';

describe('AddaprComponent', () => {
  let component: AddaprComponent;
  let fixture: ComponentFixture<AddaprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
