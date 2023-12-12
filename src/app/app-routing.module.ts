import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRouteGuard } from './utils/guards';

const routes: Routes = [
  // {
  //   path: '',
  //   canActivateChild: [AuthRouteGuard],
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: '',
  //       pathMatch: 'full',
  //     },
  //   ],
  // },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((home) => home.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((auth) => auth.AuthModule),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
