import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoctComponent } from './addoct.component';

describe('AddoctComponent', () => {
  let component: AddoctComponent;
  let fixture: ComponentFixture<AddoctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
