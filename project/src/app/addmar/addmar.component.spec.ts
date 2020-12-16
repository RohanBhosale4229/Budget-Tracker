import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmarComponent } from './addmar.component';

describe('AddmarComponent', () => {
  let component: AddmarComponent;
  let fixture: ComponentFixture<AddmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
