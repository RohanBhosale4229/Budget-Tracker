import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjanComponent } from './addjan.component';

describe('AddjanComponent', () => {
  let component: AddjanComponent;
  let fixture: ComponentFixture<AddjanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddjanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
