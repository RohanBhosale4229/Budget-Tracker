import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddecComponent } from './adddec.component';

describe('AdddecComponent', () => {
  let component: AdddecComponent;
  let fixture: ComponentFixture<AdddecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
