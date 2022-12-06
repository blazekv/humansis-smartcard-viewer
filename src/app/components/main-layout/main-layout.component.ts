import { Component, OnInit } from '@angular/core';
import { CoreModuleState } from '../../state';
import { Store } from '@ngrx/store';
import { logout } from '../../state/user/user.actions';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  constructor(private store: Store<CoreModuleState>) {}

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(logout());
  }
}
