import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/services/portal.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-positive-balance',
  templateUrl: './positive-balance.component.html',
  styleUrls: ['./positive-balance.component.scss']
})
export class PositiveBalanceComponent implements OnInit {
  public loading = false;
  
  files = [
    {
      "idCertificado": 3,
      "idArchivo": 2,
      "fileName": "paz-salvo",
      "fileExt": "",
      "file": ""
    },
    {
      "idCertificado": 3,
      "idArchivo": 3,
      "fileName": "carta-solicitud",
      "fileExt": "",
      "file": ""
    },
    {
      "idCertificado": 3,
      "idArchivo": 4,
      "fileName": "foto-copia",
      "fileExt": "",
      "file": ""
    }
  ]

  error: any;
  currentPosition: number = 0;
  constructor(private portalService: PortalService, private router: Router) { }

  ngOnInit(): void {
  }


  openFile(id: string, index: number) {
    this.currentPosition = index;
    (document.getElementById(id) as HTMLInputElement).click();
  }

  handleFileSelect(evt: any) {
    var files = evt.target.files;
    this.files[this.currentPosition].fileExt = String(this.getExtension(files[0].name))
    this.toBase64(files[0])
      .then((base64: any) => {
        let outPutFile = base64.replace("data:application/pdf;base64,", "");
        outPutFile = outPutFile.replace("data:image/jpeg;base64,", "");
        outPutFile = outPutFile.replace("data:image/png;base64,", "");
        console.log(outPutFile);
        this.files[this.currentPosition]['file'] = outPutFile;
      });
  }

  getExtension(filename: string) {
    return filename.split('.').pop();
  }

  toBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }


  save() {
    this.error = null;
    this.loading = true;
    this.portalService.saldoAFavor(this.files)
      .subscribe(response => {
        console.log(response)
        this.loading = false;
        this.router.navigate(['/portal/solcitud-saldo-a-favor-generada',])
      }, async responseErr => {
        this.error = responseErr.error.respuesta;
        await Swal.fire('Lo sentimos', this.error, 'error')
        this.loading = false;
      })
  }


  get isValidForm(){
    return this.files.filter(x => x.fileExt == '').length > 0;
  }
}
