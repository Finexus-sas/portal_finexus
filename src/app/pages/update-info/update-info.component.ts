import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { AdoComponent } from 'src/app/components/ado/ado.component';
import { PortalService } from 'src/app/services/portal.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss']
})
export class UpdateInfoComponent implements OnInit {
  public form: FormGroup;
  @ViewChild(AdoComponent, { static: false }) ado: AdoComponent;
  adoResponse: any;
  constructor(private fb: FormBuilder, 
    private portalService: PortalService, 
    private authService: AuthService,
    private router: Router, 
    private route: ActivatedRoute) {
    this.form = this.fb.group({
      "email": ["", Validators.compose([Validators.required, Validators.email])],
      "celular": ["", Validators.compose([Validators.required])],
      "direccion": ["", Validators.compose([Validators.required])],
    });
    this.adoResponse = this.route.snapshot.queryParams._Response;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    if (this.adoResponse) {
      this.ado.setResponse(this.adoResponse);
    } else {
      this.openAdoValidation()
    }
  }

  openAdoValidation() {
    this.ado.openValidation(environment.adoRegisterCallback + "/portal/actualizacion-de-datos", this.authService.identification)
  }
  saveData() {
    this.portalService.updateInfo(this.form.value)
      .subscribe(response => {
        this.router.navigate(['/portal/actualizacion-correcta'])
      })
  }


  onAdoState($event: number) {
    console.log($event);
    switch ($event) {
      case 1:
        break;
      case 2:
        this.router.navigate(['/portal/error-validacion']);
        break;
      case 3:
        // this.router.navigate(['/portal/success-validacion'])
        break;

      case 4:
        //Esperando a loa cachones
        break;
    }
  }

}
