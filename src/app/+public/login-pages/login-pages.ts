import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pages',
  imports: [ FormsModule],
  templateUrl: './login-pages.html',
  styleUrl: './login-pages.scss',
})
export class LoginPages {
  router=inject(Router);
  message:string='';
loginForm:Loginform={
usermame:'',
password:'',
keepMe:false
};
check(){
  if( this.loginForm.usermame=='admin'&& this.loginForm.password=='admin'){
    sessionStorage.setItem('auth-token','asdfghjkloiuytredc');
    if (this.loginForm.keepMe==true) {
localStorage.setItem('auth-token','asdfghjkloiuytredc')
    }
    this.router.navigateByUrl('private');
  }
  else{
this.message='نام کابری یا کلمه عبور صحیح نیست';

  }
}
}

interface Loginform{
  usermame:string;
  password:string;
  keepMe:boolean;
}
