import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcardSearchPageComponent } from './smartcard-search-page.component';

describe('SmartcardSearchPageComponent', () => {
  let component: SmartcardSearchPageComponent;
  let fixture: ComponentFixture<SmartcardSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartcardSearchPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartcardSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
