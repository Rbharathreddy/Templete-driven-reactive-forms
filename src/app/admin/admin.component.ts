import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  user = { name: '', gender: '', plan: '', status: '' };

  users: any[] = [
    { name: 'Steve Smith', gender: 'Male', plan: 'Monthly', status: 'Active' },
    { name: 'Mery Jane', gender: 'Female', plan: 'Yearly', status: 'Inactive' }
  ];

  createUser() {
    if (this.user.name && this.user.gender && this.user.plan && this.user.status) {
      this.users.push({ ...this.user });
      this.user = { name: '', gender: '', plan: '', status: '' };
    } else {
      alert('Please fill all fields!');
    }
  }
}
