import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcardDetailComponent } from './smartcard-detail.component';

describe('SmartcardDetailComponent', () => {
  let component: SmartcardDetailComponent;
  let fixture: ComponentFixture<SmartcardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartcardDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartcardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
