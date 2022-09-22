import { TestBed } from '@angular/core/testing';

import { SmartcardLoadedGuard } from './smartcard-loaded.guard';

describe('SmartcardLoadedGuard', () => {
  let guard: SmartcardLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SmartcardLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
