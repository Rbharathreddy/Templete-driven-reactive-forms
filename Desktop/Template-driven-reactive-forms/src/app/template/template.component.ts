import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  user = {
    firstName: 'bharath',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address1: '',
    address2: '',
    city: '',
    region: '',
    postalCode: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('✅ Form Submitted:', this.user);
      alert('Registration successful!');
      form.reset();
    } else {
      alert('❌ Please fill all required fields correctly.');
    }
  }
}