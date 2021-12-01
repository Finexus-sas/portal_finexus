import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RecaptchaComponent } from "ng-recaptcha";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showError: boolean = false;
  public formLogin: FormGroup;
  public resolve: boolean = false;
  public recaptchaResponse: any;
  @ViewChild('captchaElem') captchaElem: RecaptchaComponent;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {
    this.formLogin = this.fb.group({
      username: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.showError = false;
    this.authService.login({ ...this.formLogin.value, "recaptcha-response": this.recaptchaResponse })
      .subscribe(loginResponse => {
        const data = loginResponse.data
        this.authService.token = data.token;
        this.authService.user = data.usuario;
        this.authService.name = data.nombre;
        this.authService.lastLogin = data.ultimo_acceso;
        this.authService.changePassword = data.cambio_password;
        this.authService.image = data.imagen;
        this.authService.identification = data.identificacion;
        this.authService.firstName = data.nombre.split(' ')[0];
        this.authService.initals = this.authService.firstName[0] + this.authService.firstName[1];
        this.router.navigate(['/portal/home'])
      }, error => {
        this.showError = true;
      })
  }

  resolvedCapcha($event: any): void {
    if ($event == null) {
      this.resolve = false;
      return;
    }
    this.recaptchaResponse = $event;
    this.resolve = true;
  }

}
