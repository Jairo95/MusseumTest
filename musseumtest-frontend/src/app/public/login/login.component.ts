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
  returnUrl = '/musseum/teacher';
  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.logout();
  }

  login() {
    this.loginService.login(this.email, this.password)
      .subscribe(
        (response) => {
          console.log('[RESPONSE]:', response);
          const loginData = response;
          this.status = loginData.Status;
          this.user = loginData.Rol;
          if (this.status === 'ok') {
            console.log('[LOGIN]: ', this.user);
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            this.router.navigate([this.returnUrl]);
          } else {
            this.errors = 'User or Password Wrong!';
          }
        },
        (error) => {
          console.error('[ERROR]: ', error);
        },
        () => {}
      );
  }

}
