import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcardEventTableComponent } from './smartcard-event-table.component';

describe('SmartcardEventTableComponent', () => {
  let component: SmartcardEventTableComponent;
  let fixture: ComponentFixture<SmartcardEventTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartcardEventTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartcardEventTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
