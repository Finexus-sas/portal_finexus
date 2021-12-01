import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deb-certificate-step2',
  templateUrl: './deb-certificate-step2.component.html',
  styleUrls: ['./deb-certificate-step2.component.scss']
})
export class DebCertificateStep2Component implements OnInit {
  active = 2;
  steps : string[]= [
     'Formulario de Solicitud',
     'Formulario de Solicitud',
     'Formulario de Solicitud',
     'Formulario de Solicitud'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
