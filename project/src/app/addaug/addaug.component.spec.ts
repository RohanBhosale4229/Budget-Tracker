import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaugComponent } from './addaug.component';

describe('AddaugComponent', () => {
  let component: AddaugComponent;
  let fixture: ComponentFixture<AddaugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
