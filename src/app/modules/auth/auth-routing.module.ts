import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorAdoComponent } from 'src/app/pages/error-ado/error-ado.component';
import { SuccessAdoComponent } from 'src/app/pages/success-ado/success-ado.component';
import { HomeComponent } from '../../pages/home/home.component';
import { LoginComponent } from '../../pages/login/login.component';
import { RecoveryPasswordComponent } from '../../pages/recovery-password/recovery-password.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [

            {
                path: "login",
                component: LoginComponent,
            },
            {
                path: "register",
                component: RegisterComponent,
            },
            {
                path: "recovery",
                component: RecoveryPasswordComponent,
            },
            {
                path: "home",
                component: HomeComponent,
            },
            {
                path: "error-validacion",
                component: ErrorAdoComponent,
            },
            {
                path: "correcta-validacion",
                component: SuccessAdoComponent,
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
