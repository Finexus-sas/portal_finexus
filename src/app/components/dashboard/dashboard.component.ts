import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/services/portal.service';

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
