import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

const REGISTER_PATH = '/login/customer-user';
const LOGIN_PATH = '/login/signin-customer';
const RECOVERY_METHODS_PATH = '/login/customer-contacts/';
const SEND_RECOVERY_METHOD = '/login/customer-code-recovery';
const SEND_CODE_RECOVERY = '/login/validate-code-recovery/';
const CHANGE_PASSWORD = '/login/cambiar-password'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  register(userInfo: IRegister): Observable<any> {
    return this.http.post(REGISTER_PATH, userInfo)
  }

  login(userInfo: any) {
    return this.http.post(LOGIN_PATH, userInfo)
  }

  getRecoveryMethods(username: string) {
    return this.http.get(RECOVERY_METHODS_PATH + username);
  }

  sendTypeMethodRecovery(data: any) {
    return this.http.post(SEND_RECOVERY_METHOD, data);
  }

  sendCodeRecovery(data: any) {
    return this.http.get(SEND_CODE_RECOVERY + data);
  }

  changePasswordUser(username:string, password:string) {
    return this.http.post(CHANGE_PASSWORD, {
      username,
      password
    });
  }


  public get token(): string {
    return String(localStorage.getItem('token'));
  }
  public set token(value: string) {
    localStorage.setItem('token', value);
  }
  public get name(): string {
    return String(localStorage.getItem('name'));
  }
  public set name(value: string) {
    localStorage.setItem('name', value);
  }


  public get firstName(): string {
    return String(localStorage.getItem('firstName'));
  }
  public set firstName(value: string) {
    localStorage.setItem('firstName', value);
  }


  public get image(): string {
    return String(localStorage.getItem('image'));
  }
  public set image(value: string) {
    localStorage.setItem('image', value);
  }

  public get lastLogin(): string {
    return String(localStorage.getItem('last_login'));
  }
  public set lastLogin(value: string) {
    localStorage.setItem('last_login', value);
  }

  public get changePassword(): string {
    return String(localStorage.getItem('change_password'));
  }
  public set changePassword(value: string) {
    localStorage.setItem('change_password', value);
  }

  public get user(): string {
    return String(localStorage.getItem('user'));
  }
  public set user(value: string) {
    localStorage.setItem('user', value);
  }


  public get identification(): string {
    return String(localStorage.getItem('identification'));
  }
  public set identification(value: string) {
    localStorage.setItem('identification', value);
  }


  public get initals(): string {
    return String(localStorage.getItem('initals'));
  }
  public set initals(value: string) {
    localStorage.setItem('initals', value);
  }
}



export interface IRegister {
  "identificacion": string,
  "nombre": string,
  "apellidos": string,
  "celular": number,
  "email": string
}
