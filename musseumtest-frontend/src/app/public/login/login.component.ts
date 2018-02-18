import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status: string;
  email: string;
  password: string;
  user: string;
  errors: string;
  returnUrl: string;
  id: number;
  usernameLogged: string;
  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.email, this.password)
      .subscribe(
        (response) => {
          console.log('[RESPONSE]:', response);
          const loginData = response;
          this.status = loginData.Status;
          this.user = loginData.Rol;
          this.id = loginData.UserId;
          this.usernameLogged = loginData.Username;
          if (this.status === 'ok') {
            localStorage.setItem('status', 'logged');
            localStorage.setItem('user', this.user);
            localStorage.setItem('id', this.id.toString());
            localStorage.setItem('username', this.usernameLogged);
            this.redirectTo(this.user);
          } else {
            this.errors = 'User or Password Wrong!';
            console.log('[MESSAGE]: No logged');
          }
        },
        (error) => {
          console.error('[ERROR]: ', error);
        },
        () => {}
      );
  }

  redirectTo(user: string) {
    console.log('[USER]: ', user);
    if ( user === 'user') {
      this.returnUrl = '/musseum/user';
    } else if ( user === 'teacher') {
      this.returnUrl = '/musseum/teacher';
    } else if ( user === 'admincontent') {
      this.returnUrl = '/musseum/admincontent';
    } else if ( user === 'adminsystem') {
      this.returnUrl = '/musseum/adminsystem';
    } else {
      this.returnUrl = '/login';
    }
    this.router.navigate([this.returnUrl]);
  }

}
