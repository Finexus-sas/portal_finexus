import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { AdoComponent } from 'src/app/components/ado/ado.component';
import { AuthService, IRegister } from '../../services/auth.service';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  @ViewChild(AdoComponent, { static: false }) ado: AdoComponent;
  public formRegister: FormGroup;
  public loading = false;
  adoResponse: any;
  error: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.formRegister = this.fb.group({
      identificacion: ["", Validators.compose([Validators.required])],
      nombre: ["", Validators.compose([Validators.required])],
      apellidos: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      celular: ["", Validators.compose([Validators.required])],
    });

    this.adoResponse = this.route.snapshot.queryParams._Response;


  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    if (this.adoResponse) {
      this.loading = true;
      this.ado.setResponse(this.adoResponse);
    }
  }

  saveUser() {
    const userInfo = JSON.parse(String(localStorage.getItem("register")));
    this.authService.register(userInfo)
      .subscribe(registerResponse => {
        this.loading = false;
        this.router.navigate(['/auth/correcta-validacion']);
      }, async responseError => {
        this.loading = false;
        this.error = responseError.error.respuesta;
        await Swal.fire('Lo sentimos', this.error, 'error')
      })
  }

  openAdoValidation() {
    const userInfo: IRegister = {
      ...this.formRegister.value,
      celular: String(this.formRegister.controls.celular.value)
    }
    console.log(userInfo);
    localStorage.setItem("register", JSON.stringify(userInfo));
    this.ado.openValidation(environment.adoRegisterCallback + "/auth/register", this.formRegister.controls.identificacion.value);
  }

  onAdoState($event: number) {
    switch ($event) {
      case 1:
        break;
      case 2:
        this.router.navigate(['/auth/error-validacion'])
        break;
      case 3:
        this.saveUser();
        break;

      case 4:
        //Esperando a loa cachones
        break;
    }
  }

}
