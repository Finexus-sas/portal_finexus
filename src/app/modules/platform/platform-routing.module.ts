import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoDebtSuccessComponent } from 'src/app/pages/ado-debt-success/ado-debt-success.component';
import { DebCertificateStep2Component } from 'src/app/pages/deb-certificate-step2/deb-certificate-step2.component';
import { DebtCertificateInfoComponent } from 'src/app/pages/debt-certificate-info/debt-certificate-info.component';
import { DebtCertificateComponent } from 'src/app/pages/debt-certificate/debt-certificate.component';
import { ErrorAdoComponent } from 'src/app/pages/error-ado/error-ado.component';
import { MissingDocumentsComponent } from 'src/app/pages/missing-documents/missing-documents.component';
import { PeaceAndSafeConfirmComponent } from 'src/app/pages/peace-and-safe-confirm/peace-and-safe-confirm.component';
import { PeaceAndSafeComponent } from 'src/app/pages/peace-and-safe/peace-and-safe.component';
import { PositiveBalanceSuccessComponent } from 'src/app/pages/positive-balance-success/positive-balance-success.component';
import { PositiveBalanceComponent } from 'src/app/pages/positive-balance/positive-balance.component';
import { SuccessAdoComponent } from 'src/app/pages/success-ado/success-ado.component';
import { UpdateInfoSuccessComponent } from 'src/app/pages/update-info-success/update-info-success.component';
import { UpdateInfoComponent } from 'src/app/pages/update-info/update-info.component';
import { HomeComponent } from '../../pages/home/home.component';
import { PlatformComponent } from './platform.component';

const routes: Routes = [
    {
        path: '',
        component: PlatformComponent,
        children: [

            {
                path: "home",
                component: HomeComponent,
            },
            {
                path: "certificado-de-deuda",
                component: DebtCertificateComponent,
            },
            {
                path: "certificado-de-deuda-paso2",
                component: DebCertificateStep2Component,
            },
            {
                path: "certificado-de-deuda-info",
                component: DebtCertificateInfoComponent,
            },
            {
                path: "lista-creditos-para-paz-y-salvo",
                component: PeaceAndSafeComponent,
            },
            {
                path: "paz-y-salvo-en-generacion",
                component: PeaceAndSafeConfirmComponent,
            },
            {
                path: "documentos-pendientes/:idSolicitud/:idCertificado/:state",
                component: MissingDocumentsComponent,
            },
            {
                path: "solcitud-saldo-a-favor",
                component: PositiveBalanceComponent,
            },
            {
                path: "solcitud-saldo-a-favor-generada",
                component: PositiveBalanceSuccessComponent,
            },
            {
                path: "actualizacion-de-datos",
                component: UpdateInfoComponent,
            }, 
            {
                path: "actualizacion-correcta",
                component: UpdateInfoSuccessComponent,
            },
            {
                path: "error-validacion",
                component: ErrorAdoComponent,
            },
            {
                path: "success-validacion/:date",
                component: AdoDebtSuccessComponent,
            },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlatformRoutingModule { }
