import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcardPageComponent } from './smartcard-page.component';

describe('SmartcardPageComponent', () => {
  let component: SmartcardPageComponent;
  let fixture: ComponentFixture<SmartcardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartcardPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartcardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
