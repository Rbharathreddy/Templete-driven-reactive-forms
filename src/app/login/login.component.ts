import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // this boolean controls which form to show
  isLogin = true;

  // login data
  login = {
    email: '',
    password: ''
  };

  // signup data
  signup = {
    name: '',
    email: '',
    password: ''
  };

  toggleForm() {
    this.isLogin = !this.isLogin; // switch between login/signup
  }

  onLogin() {
    if (this.login.email && this.login.password) {
      alert(`Welcome back, ${this.login.email}!`);
      console.log('Login Data:', this.login);
    } else {
      alert('Please fill in all login fields.');
    }
  }

  onSignup() {
    if (this.signup.name && this.signup.email && this.signup.password) {
      console.log('Signup Data:', this.signup);
    } else {
      alert('Please fill in all signup fields.');
    }
  }
}
