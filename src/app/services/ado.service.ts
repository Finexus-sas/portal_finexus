import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AdoService {

  constructor(private http: HttpService) { }


  saveADOReponse(data: any) {
    return this.http.post('/generic/request', { "resource": "/generic/request/save-enrolamiento", data });
  }

  validateClientADO(id: any) {
    const options = {
      headers: {
        apiKey: "db92efc69991"
      }
    }
    return this.http.get('https://adocolumbia.ado-tech.com/Finexus/api/Finexus/FindByNumberId?identification=' + id + '&docType=1&returnImages=false');
  }

  validateClientADOByIdTrasanction(id: any) {
    const options = {
      headers: {
        apiKey: "db92efc69991"
      }
    }
    return this.http.get('https://adocolumbia.ado-tech.com/Finexus/api/Finexus/Validation?id=' + id + '&docType=1&returnImages=false');
  }

  validateClientSuccess(id: any) {
    const options = {
      headers: {
        apiKey: "db92efc69991"
      }
    }
    return this.http.get('https://adocolumbia.ado-tech.com/Finexus/api/Finexus/FindByNumberIdSuccess?identification=' + id + '&docType=1&returnImages=false');
  }

}
