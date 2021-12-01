import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/services/portal.service';

@Component({
  selector: 'app-peace-and-safe',
  templateUrl: './peace-and-safe.component.html',
  styleUrls: ['./peace-and-safe.component.scss']
})
export class PeaceAndSafeComponent implements OnInit {
  listPeaceAndSafe : any[] = [];
  numeroObligacion: string;
  error : any;
  constructor(private portalService: PortalService, private router: Router) { }

  ngOnInit(): void {
    this.getListPeaceAndSafe()
  }

  getListPeaceAndSafe(){
    this.portalService.getListPeaceAndSafe()
    .subscribe( response => { 
      this.listPeaceAndSafe = response;
    })
  }


  generate(){
    this.error = null;
    this.portalService.generatePeaceAndSafe(this.numeroObligacion)
    .subscribe( response => { 
      this.router.navigate(['/portal/paz-y-salvo-en-generacion'])
    }, responseError => { 
      this.error = responseError.error.respuesta;
    })
  }

}
