import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjunComponent } from './addjun.component';

describe('AddjunComponent', () => {
  let component: AddjunComponent;
  let fixture: ComponentFixture<AddjunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddjunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
