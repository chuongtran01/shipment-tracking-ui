import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthRouteGuard} from "./utils/guards";

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthRouteGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import("./pages/home/home.module").then(home => home.HomeModule),
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import("./pages/login/login.module").then(login => login.LoginModule)
  },
  {
    path: 'registration',
    loadChildren: () => import("./pages/registration/registration.module").then(registration => registration.RegistrationModule)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
