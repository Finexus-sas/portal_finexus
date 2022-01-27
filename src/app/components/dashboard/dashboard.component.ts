import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/services/portal.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  active = 1;
  steps: string[] = [
    'Etapa 1',
    'Etapa 2',
    'Etapa 3',
    'Etapa 4',
    'Etapa 5'
  ]

  requests: any[] = [];
  test: any = null;
  constructor(private portalService: PortalService, private router: Router) { }

  ngOnInit(): void {
    this.getRequestClient();
  }

  getRequestClient() {
    this.portalService.getRequestClient()
      .subscribe(response => {
        this.requests = response.filter((x: any) => x.nombreCertificado == "CERTIFICADO DEUDA");
      })
  }

  onGeneratePayment(item: any): void {
    const data: any = {
      type: 3,
      idPayment: item.idSolicitud
    }
    Swal.fire({ title: 'Cargando', html: '', timer: 500000, didOpen: () => { Swal.showLoading() }, }).then((result) => { })
    this.portalService.getGeneratePayment(data).subscribe((res) => {
      Swal.close();
      if (res.code == 200) {
        Swal.fire(
          '¡Información!',
          `Se ha enviado un nuevo recibo de pago al e-mail.`,
          'success'
        ).then(resultado => {
          if (resultado.isConfirmed) { }
        });
      }
    });
  }

  getState(name: string) {
    switch (name) {
      case 'SOL':
        return 1;

      case 'RAD':
        return 2;


      case 'VAI':
        return 3;


      case 'VAL':
        return 4;

      default:
        return 5;

    }
  }

}
