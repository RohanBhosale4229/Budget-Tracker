import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmayComponent } from './addmay.component';

describe('AddmayComponent', () => {
  let component: AddmayComponent;
  let fixture: ComponentFixture<AddmayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
