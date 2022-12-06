import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { reducers } from './state';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { CustomSerializer } from './state/router/router.reducers';
import { UserEffects } from './state/user/user.effects';
import { SmartcardPageComponent } from './pages/smartcard-page/smartcard-page.component';
import { SmartcardSearchPageComponent } from './pages/smartcard-search-page/smartcard-search-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterEffects } from './state/router/router.effects';
import { SmartcardSearchComponent } from './components/smartcard-search/smartcard-search.component';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { SmartcardEffects } from './state/smartcard/smartcard.effects';
import { SmartcardDetailComponent } from './components/smartcard-detail/smartcard-detail.component';
import { storageMetaReducer } from './utils/storage.metareducer';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { DepositTableComponent } from './components/deposit-table/deposit-table.component';
import { PurchaseTableComponent } from './components/purchase-table/purchase-table.component';
import { BeneficiaryDetailComponent } from './components/beneficiary-detail/beneficiary-detail.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ToastrModule } from 'ngx-toastr';
import { MessageEffects } from './state/message/message.effects';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VendorPageComponent } from './pages/vendor-page/vendor-page.component';
import { VendorEventsLoadedGuard } from './guards/vendor-events-loaded.guard';
import { VendorEffects } from './state/vendor/vendor.effects';
import { VendorEventTableComponent } from './components/vendor-event-table/vendor-event-table.component';
import { SmartcardEventTableComponent } from './components/smartcard-event-table/smartcard-event-table.component';
import { SmartcardHistoryComponent } from './components/smartcard-history/smartcard-history.component';
import { MatSelectModule } from '@angular/material/select';

export function storageSyncReducer(reducer: ActionReducer<any>) {
  return storageMetaReducer<any>({
    storage: window.sessionStorage,
    stores: {
      user: {
        includeKeys: ['token'],
      },
    },
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [storageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SmartcardPageComponent,
    SmartcardSearchPageComponent,
    LoginPageComponent,
    SmartcardSearchComponent,
    SmartcardDetailComponent,
    DepositTableComponent,
    PurchaseTableComponent,
    BeneficiaryDetailComponent,
    MainLayoutComponent,
    VendorPageComponent,
    VendorEventTableComponent,
    SmartcardEventTableComponent,
    SmartcardHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      UserEffects,
      SmartcardEffects,
      MessageEffects,
      RouterEffects,
      VendorEffects,
    ]),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
      serializer: CustomSerializer,
    }),
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production,
    }),
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatToolbarModule,
    MatSelectModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
