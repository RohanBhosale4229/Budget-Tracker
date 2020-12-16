import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjulComponent } from './addjul.component';

describe('AddjulComponent', () => {
  let component: AddjulComponent;
  let fixture: ComponentFixture<AddjulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddjulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
