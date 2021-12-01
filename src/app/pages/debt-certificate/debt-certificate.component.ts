import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { PortalService } from 'src/app/services/portal.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-debt-certificate',
  templateUrl: './debt-certificate.component.html',
  styleUrls: ['./debt-certificate.component.scss']
})
export class DebtCertificateComponent implements OnInit {

  public form: FormGroup;
  public emails: any[] = [];
  public pagaduries: any[] = [];
  public dptos: any[] = [];
  public citys: any[] = [];

  active = 1;
  steps: string[] = [
    'Formulario de Solicitud',
    'Formulario de Solicitud',
    'Formulario de Solicitud',
    'Formulario de Solicitud'
  ]
  error: any;

  constructor(
    private fb: FormBuilder,
    private portalService: PortalService,
    private router: Router
  ) {
    this.form = this.fb.group({
      "identificacion": ["", Validators.compose([Validators.required])],
      "fecha_expedicion": ["", Validators.compose([Validators.required])],
      "departamento_exp_cc": ["", Validators.compose([Validators.required])],
      "ciudad_exp_cc": ["", Validators.compose([Validators.required])],
      "nombres": ["", Validators.compose([Validators.required])],
      "apellidos": ["", Validators.compose([Validators.required])],
      "id_pagaduria": ["", Validators.compose([Validators.required])],
      "email": ["", Validators.compose([Validators.required, this.validateUrl.bind(this)])],
      "domain": ["", Validators.compose([Validators.required])],
      "celular": ["", Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
    this.getPaying();
    this.getEmails();
    this.getDptos();
  }


  getPaying() {
    this.portalService.getPaying().subscribe((Response) => {
      this.pagaduries = Response;
    });
  }

  getEmails() {
    this.portalService.getEmials().subscribe((data) => {
      this.emails = data;
    });
  }

  getDptos() {
    this.portalService.getDptos().subscribe((data) => {
      this.dptos = data;
    });
  }

  getCitys() {
    this.portalService.getCitys(this.form.controls.departamento_exp_cc.value).subscribe((data) => {
      console.log(data)
      this.citys = data;
    });
  }

  private validateUrl(control: AbstractControl) {
    if (!control.value) {
      return null;
    }
    if (control.value.indexOf('@') > 0) {
      return { validEmail: true };
    }
    return null;
  }

  save() {
    this.error = null;
    this.form.markAllAsTouched()
    if (!this.form.valid) {
      console.log(this.form)
      return;
    }
    let data = {
      ...this.form.value,
      id_pagaduria: parseInt(this.form.controls.id_pagaduria.value),
      email: this.form.controls.email.value + this.form.controls.domain.value,
      fecha_expedicion: this.portalService.buildDate(
        this.form.controls.fecha_expedicion.value
      ),
    }
    delete data['domain'];
    this.portalService
      .saveDebtCertificate(data)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/portal/certificado-de-deuda-info'])
      }, async err => {
        console.log(err)
        this.error = err.error.respuesta;
        await Swal.fire('Lo sentimos', this.error, 'error');
      });
  }
}
