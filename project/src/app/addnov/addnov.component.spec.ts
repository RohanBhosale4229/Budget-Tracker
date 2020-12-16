import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnovComponent } from './addnov.component';

describe('AddnovComponent', () => {
  let component: AddnovComponent;
  let fixture: ComponentFixture<AddnovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
