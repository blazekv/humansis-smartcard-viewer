import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcardHistoryComponent } from './smartcard-history.component';

describe('SmartcardHistoryComponent', () => {
  let component: SmartcardHistoryComponent;
  let fixture: ComponentFixture<SmartcardHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartcardHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartcardHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
