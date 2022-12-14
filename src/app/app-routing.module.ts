import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SmartcardPageComponent } from './pages/smartcard-page/smartcard-page.component';
import { SmartcardSearchPageComponent } from './pages/smartcard-search-page/smartcard-search-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';
import { SmartcardLoadedGuard } from './guards/smartcard-loaded.guard';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { VendorPageComponent } from './pages/vendor-page/vendor-page.component';
import { VendorEventsLoadedGuard } from './guards/vendor-events-loaded.guard';
import { SmartcardEventsLoadedGuard } from './guards/smartcard-events-loaded.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: SmartcardSearchPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'smartcard/:code',
        component: SmartcardPageComponent,
        canActivate: [SmartcardLoadedGuard, SmartcardEventsLoadedGuard],
      },
      {
        path: 'vendor/:id',
        component: VendorPageComponent,
        canActivate: [VendorEventsLoadedGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
