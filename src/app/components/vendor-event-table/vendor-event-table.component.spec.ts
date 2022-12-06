import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorEventTableComponent } from './vendor-event-table.component';

describe('VendorEventTableComponent', () => {
  let component: VendorEventTableComponent;
  let fixture: ComponentFixture<VendorEventTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorEventTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VendorEventTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
