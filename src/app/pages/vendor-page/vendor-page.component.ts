import { Component, OnInit } from '@angular/core';
import { CoreModuleState } from '../../state';
import { Store } from '@ngrx/store';
import { getVendorEvents } from '../../state/vendor/vendor.selectors';

@Component({
  selector: 'app-vendor-page',
  templateUrl: './vendor-page.component.html',
  styleUrls: ['./vendor-page.component.scss'],
})
export class VendorPageComponent implements OnInit {
  vendorEvents$ = this.store.select(getVendorEvents);

  constructor(private store: Store<CoreModuleState>) {}

  ngOnInit(): void {}
}
