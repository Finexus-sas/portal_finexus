import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';
import { AdoComponent } from './components/ado/ado.component';
import { HomeComponent } from './pages/home/home.component';
import { RecaptchaModule } from "ng-recaptcha";
import { DebtCertificateComponent } from './pages/debt-certificate/debt-certificate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DebtCertificateInfoComponent } from './pages/debt-certificate-info/debt-certificate-info.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { DebCertificateStep2Component } from './pages/deb-certificate-step2/deb-certificate-step2.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorAdoComponent } from './pages/error-ado/error-ado.component';
import { SuccessAdoComponent } from './pages/success-ado/success-ado.component';
import { PeaceAndSafeComponent } from './pages/peace-and-safe/peace-and-safe.component';
import { PeaceAndSafeConfirmComponent } from './pages/peace-and-safe-confirm/peace-and-safe-confirm.component';
import { MissingDocumentsComponent } from './pages/missing-documents/missing-documents.component';
import { PositiveBalanceComponent } from './pages/positive-balance/positive-balance.component';
import { UpdateInfoComponent } from './pages/update-info/update-info.component';
import { PositiveBalanceSuccessComponent } from './pages/positive-balance-success/positive-balance-success.component';
import { UpdateInfoSuccessComponent } from './pages/update-info-success/update-info-success.component';
import { AdoDebtSuccessComponent } from './pages/ado-debt-success/ado-debt-success.component';
import { NgxLoadingModule } from 'ngx-loading';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryPasswordComponent,
    AdoComponent,
    HomeComponent,
    DebtCertificateComponent,
    DebtCertificateInfoComponent,
    StepperComponent,
    DebCertificateStep2Component,
    DashboardComponent,
    ErrorAdoComponent,
    SuccessAdoComponent,
    PeaceAndSafeComponent,
    PeaceAndSafeConfirmComponent,
    MissingDocumentsComponent,
    PositiveBalanceComponent,
    UpdateInfoComponent,
    PositiveBalanceSuccessComponent,
    UpdateInfoSuccessComponent,
    AdoDebtSuccessComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    NgbModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
