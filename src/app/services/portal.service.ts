import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor(private http: HttpService) { }


  getTypeId() {
    return this.http.post("/generic/request", {
      resource: "/generic/request/tipo-ident",
    });
  }

  getEmials() {
    return this.http.post("/generic/request", {
      resource: "/generic/request/lista-email",
    });
  }

  getPaying() {
    return this.http.post("/generic/request", {
      resource: "/generic/request/pagadurias",
    });
  }

  getDptos() {
    return this.http.get("/login/departamentos");
  }

  getCitys(idDpto: string) {
    return this.http.get("/login/municipios/" + idDpto);
  }

  saveDebtCertificate(data: any) {
    return this.http.post("/portal/certificado/deuda", data);
  }


  getRequestClient() {
    return this.http.post("/generic/request", {
      resource: "/generic/request/solicitudes-cliente",
    });
  }


  getListPeaceAndSafe() {
    return this.http.get("/portal/seas/pazysalvo");
  }

  generatePeaceAndSafe(id: string) {
    return this.http.post("/portal/certificado/pazysalvo", { nro_obligacion: id });
  }


  entitys() {
    return this.http.post("/generic/request", {
      resource: "/generic/request/entidades-compra-cartera",
    })
  }

  saveFile(data: any) {
    return this.http.post("/portal/certificado/adjuntar", data);
  }

  validateAdo(cedula: string) {
    return this.http.get("/login/validate-customer-ado/" + cedula);
  }

  saldoAFavor(data: any) {
    return this.http.post("/portal/certificado/saldo-favor", data);
  }

  updateInfo(data: any) {
    return this.http.post("/portal/seas/actualizar-datos_personales", data);
  }

  changeState(data: any) {
    return this.http.post("/generic/request", {
      resource: "/generic/request/cambiar-estado-solicitud",
      data
    })

  }

  buildDate(object: any) {
    if (!(object.year && object.month && object.day)) {
      return "";
    }

    let month = String(object.month).length == 1 ? "0" + String(object.month) : String(object.month)
    let day = String(object.day).length == 1 ? "0" + String(object.day) : object.day

    console.log(object.year + "-" + month + "-" + day)
    return object.year + "-" + month + "-" + day
  }

}
