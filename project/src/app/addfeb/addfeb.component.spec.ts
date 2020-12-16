import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfebComponent } from './addfeb.component';

describe('AddfebComponent', () => {
  let component: AddfebComponent;
  let fixture: ComponentFixture<AddfebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
