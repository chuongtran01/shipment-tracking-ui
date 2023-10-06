import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRouteGuard } from './utils/guards';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthRouteGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((home) => home.HomeModule),
      },
      {
        path: 'select-source',
        loadChildren: () =>
          import('./pages/source-selection/source-selection.module').then(
            (sourceSelection) => sourceSelection.SourceSelectionModule
          ),
      },
      {
        path: 'pipeline',
        loadChildren: () =>
          import('./pages/pipeline/pipeline.module').then(
            (pipeline) => pipeline.PipelineModule
          ),
      },
      {
        path: 'configure-source',
        loadChildren: () =>
          import('./pages/configure-source/configure-source.module').then(
            (configureSource) => configureSource.ConfigureSourceModule
          ),
      },
      {
        path: 'configure-destination',
        loadChildren: () =>
          import(
            './pages/configure-destination/configure-destination.module'
          ).then(
            (configureDestination) =>
              configureDestination.ConfigureDestinationModule
          ),
      },
      {
        path: 'final-settings',
        loadChildren: () =>
          import('./pages/final-settings/final-settings.module').then(
            (finalSettings) => finalSettings.FinalSettingsModule
          ),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((login) => login.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./pages/registration/registration.module').then(
        (registration) => registration.RegistrationModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/forgot-password/forgot-password.module').then(
        (forgotPassword) => forgotPassword.ForgotPasswordModule
      ),
  },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
