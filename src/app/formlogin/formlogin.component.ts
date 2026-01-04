import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent {

  otpVisible = false;
  otpSuccess = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  loginForm = this.fb.group({
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.email]],
    otp: ['']
  });

  sendOtp() {
    if (this.loginForm.controls['mobile'].invalid || this.loginForm.controls['email'].invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.otpVisible = true;
    alert("OTP sent: 1234");
  }

  verifyOtp() {
    const otpValue = this.loginForm.controls['otp'].value;

    if (otpValue === '1234') {
      this.otpSuccess = true;

      setTimeout(() => {
               this.router.navigate(['/euser']);
      }, 1200);

    } else {
      this.otpSuccess = false;
      alert("Invalid OTP");
    }
  }
}