import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { AdoService } from 'src/app/services/ado.service';

@Component({
  selector: 'app-ado',
  templateUrl: './ado.component.html',
  styleUrls: ['./ado.component.scss']
})
export class AdoComponent implements OnInit {
  showLoading: boolean = false;
  showPreLoading: boolean = false;
  status: number;
  @Output() onState = new EventEmitter<number>();

  constructor(private adoService: AdoService) { }

  ngOnInit(): void {
  }

  openValidation(urlCallback: string, cedula: string = "1143444600"): void {
    this.showPreLoading = true;
    //
    this.validateUser(urlCallback, cedula);
  }


  validateUser(urlCallback: string, id: string) {
    this.adoService.validateClientSuccess(id)
      .subscribe(response => {
        window.top.location.href = encodeURI('https://adocolumbia.ado-tech.com/finexus/verificar-persona?callback=' + urlCallback + '&key=db92efc69991&projectName=Finexus&DocumentType=1&IdentificationNumber=' + id)
      }, err => {
        window.top.location.href = encodeURI('https://adocolumbia.ado-tech.com/Finexus/validar-persona?callback=' + urlCallback + '&key=db92efc69991&projectName=Finexus')
      });
  }


  async setResponse(responseAdo: any) {
    let response = JSON.parse(responseAdo);
    const idState = parseInt(response.Extras.IdState);
    this.saveLogADO(response)

    if (idState != 2 && idState != 14 && idState != 1) {

      return this.onState.emit(2);
    }

    if (idState == 1) {
      return this.validateTransaction(response)
    }

    if (idState == 2 || idState == 14) {
      return this.adoService.validateClientSuccess(response.IdNumber)
        .subscribe(response => {
          this.onState.emit(3);
        })
    }
  }


  validateTransaction(transaction: any) {
    this.showLoading = true;
    var timeOut = setTimeout(() => {
      clearInterval(interval);
      this.onState.emit(2);
      alert("Estado de validación, No hubo respuesta por parte de la entidad de la validación")
    }, 480000)
    var interval = setInterval(() => {
      this.adoService.validateClientADO(transaction.IdNumber)
        .subscribe(async data => {
          if (data.Scores[0].Id == 2) {
            clearTimeout(timeOut)
            clearInterval(interval);
            this.onState.emit(3);
            this.showLoading = false;
            this.saveLogADO(data)
          } else {
            if (data.Scores[0].StateName != "Pendiente") {

              clearInterval(interval)
              clearTimeout(timeOut)
              this.onState.emit(2);
              this.saveLogADO(data)
            }
          }
        })
    }, 30000)


  }

  saveLogADO(data: any) {
    this.adoService.saveADOReponse({
      "identificacion": String(data.IdNumber),
      "json_ado": data
    })
      .subscribe(Response => {
        console.log('Saved log')
      })
  }

}
