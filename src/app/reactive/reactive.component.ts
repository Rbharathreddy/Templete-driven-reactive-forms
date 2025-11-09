import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

   regForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern(/^[0-9]{5,6}$/)]],
      region: ['', Validators.required],
    });
  }

  get f() {
    return this.regForm.controls;
  }

  onSubmit() {
    if (this.regForm.valid) {
      console.log('✅ Form Data:', this.regForm.value);
      alert('Registration successful!');
      this.regForm.reset();
    } else {
      this.regForm.markAllAsTouched();
      alert('❌ Please fix all validation errors.');
    }
  }

}
