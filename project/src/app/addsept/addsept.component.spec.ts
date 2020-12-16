import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddseptComponent } from './addsept.component';

describe('AddseptComponent', () => {
  let component: AddseptComponent;
  let fixture: ComponentFixture<AddseptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddseptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddseptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
