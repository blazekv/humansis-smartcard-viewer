import { TestBed } from '@angular/core/testing';

import { SmartcardService } from './smartcard.service';

describe('SmartcardService', () => {
  let service: SmartcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
