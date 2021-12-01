import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PortalService } from 'src/app/services/portal.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { AdoComponent } from 'src/app/components/ado/ado.component';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-missing-documents',
  templateUrl: './missing-documents.component.html',
  styleUrls: ['./missing-documents.component.scss']
})
export class MissingDocumentsComponent implements OnInit {
  public loading = false;
  active = 2;
  steps: string[] = [
    'Formulario de Solicitud',
    'Formulario de Solicitud',
    'Formulario de Solicitud',
    'Formulario de Solicitud'
  ]
  entitys: any[] = [];
  public form: FormGroup;
  motivo: string = 'COMPRA CARTERA';
  idSolicitud: any;
  idCertificado: any;
  fileExt: any;
  file: any;
  fileName: any;
  idArchivo = 1;
  adoResponse: any;
  error: any;
  state: any;
  @ViewChild(AdoComponent, { static: false }) ado: AdoComponent;
  constructor(public authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private portalService: PortalService) {
    this.idSolicitud = this.route.snapshot.params.idSolicitud;
    this.idCertificado = this.route.snapshot.params.idCertificado;

    this.adoResponse = this.route.snapshot.queryParams._Response;
    this.state = this.route.snapshot.params.state;
    console.log(this.state)
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      "valorPagado": ["", Validators.compose([Validators.required])],
      "fechaPago": ["", Validators.compose([Validators.required])],
      "entidad": ["", Validators.compose([Validators.required])],
    });
    this.getEntitys();
  }

  ngAfterViewInit(): void {

    if (this.adoResponse) {
      this.loading = true;
      this.ado.setResponse(this.adoResponse);
    } else {

      if (this.state == '2') {
        this.openAdoValidation();
      }
    }
  }

  getEntitys() {
    this.portalService.entitys()
      .subscribe(response => {
        this.entitys = response;
      });
  }

  currency(control: string) {
    this.form.controls[control].setValue(
      this.form.controls[control].value
        .replace(/,/g, "")
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        .replace(/[a-zA-Z]/, ",")
    );
  }

  openFile() {
    (document.getElementById('file') as HTMLInputElement).click();
  }

  handleFileSelect(evt: any) {
    var files = evt.target.files;
    this.fileExt = this.getExtension(files[0].name);
    this.fileName = 'recibo-pago';
    this.toBase64(files[0])
      .then((base64: any) => {
        let outPutFile = base64.replace("data:application/pdf;base64,", "");
        outPutFile = outPutFile.replace("data:image/jpeg;base64,", "");
        outPutFile = outPutFile.replace("data:image/png;base64,", "");
        this.file = outPutFile;
      })
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
    const data = {
      "idSolicitud": parseInt(this.idSolicitud),
      "idCertificado": parseInt(this.idCertificado),
      "idArchivo": this.idArchivo,
      "fechaPago": this.portalService.buildDate(this.form.controls.fechaPago.value),
      "valorPagado": parseInt(this.form.controls.valorPagado.value.replace(/,/g, "")),
      "motivo": this.motivo,
      "fileName": this.fileName,
      "fileExt": this.fileExt,
      "file": this.file
    }

    this.portalService.saveFile(data)
      .subscribe(response => {
        this.openAdoValidation();
      })
  }

  validateAdo() {
    this.loading = true;
    this.portalService.validateAdo(this.authService.identification)
      .subscribe(async response => {
        this.loading = false;
        if (response.data != 'STOP') {
          this.save();
        } else {
          this.error = "Haz superado el numero de intentos permitidos diarios";
          await Swal.fire('Lo sentimos', this.error, 'error')
        }
      }, async error => {
        this.loading = false;
        await Swal.fire('Ha ocurrido un error inesperado, intentelo nuevamente', 'error')
      })
  }

  openAdoValidation() {
    this.ado.openValidation(environment.adoRegisterCallback + "/portal/documentos-pendientes/" + this.idSolicitud + "/" + this.idCertificado + "/" + this.state, this.authService.identification)
  }

  onAdoState($event: number) {
    console.log($event);
    switch ($event) {
      case 1:
        break;
      case 2:
        this.loading = false;
        this.router.navigate(['/portal/error-validacion']);
        break;
      case 3:
        const data = {
          "estado": "VAI",
          "idSolicitud": parseInt(this.idSolicitud)
        }

        this.portalService.changeState(data)
          .subscribe(response => {
            console.log(response);
            this.loading = false;
            const message = response.fechaEnvioCertificado ? response.fechaEnvioCertificado : " 15 dias calendario ";
            const route = '/portal/success-validacion/' + message;
            this.router.navigate([route])
          })
        break;

      case 4:
        //Esperando a loa cachones
        break;

        
    }
  }
}
