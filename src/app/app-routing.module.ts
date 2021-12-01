import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'portal/home',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'portal',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/platform/platform.module').then(m => m.PlatformModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


