import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private authService: AuthService,
              private router: Router) { }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      this.router.navigate(['/products']);

    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
