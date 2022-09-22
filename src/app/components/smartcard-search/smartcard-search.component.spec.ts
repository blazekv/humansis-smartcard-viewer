import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcardSearchComponent } from './smartcard-search.component';

describe('SmartcardSearchComponent', () => {
  let component: SmartcardSearchComponent;
  let fixture: ComponentFixture<SmartcardSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartcardSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartcardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
