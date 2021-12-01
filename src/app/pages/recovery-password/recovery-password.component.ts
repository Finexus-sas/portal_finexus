import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit {
  step = 1;
  username: string;
  code: string;
  recoveryMethod: any;
  recoveryMethods: any[];
  password_validate: string;
  password: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }


  sendUser() {
    this.authService.getRecoveryMethods(this.username)
      .subscribe(response => {
        if(!response[0]){
          return alert('Usuario no encontrado')
        }
        this.recoveryMethods = [
          {
            type: 'email',
            value: response[0].email
          },
          {
            type: 'celular',
            value: response[0].celular
          }
        ];

        this.step = 2;
      }, err => {
        console.log(err)
      })
  }


  sendTypeMethodRecovery() {
    this.authService.sendTypeMethodRecovery({
      username: this.username,
      medio: this.recoveryMethod
    }).subscribe( response =>{
      console.log(response);
      this.step = 3;
    })
  }


  sendCodeRecovery() {
    this.authService.sendCodeRecovery(this.code)
    .subscribe(response =>{
      console.log(response)
      this.step = 4;
    })
  }


  changePassword(){
    this.authService.changePasswordUser(this.username, this.password)
    .subscribe(response =>{
      console.log(response);
      this.step = 5;
    })
  }


  get validatePassword() : boolean {
    return (!this.password) || (this.password != this.password_validate) ||
    (this.password.length < 6 && this.password_validate.length < 6)
  }
}
