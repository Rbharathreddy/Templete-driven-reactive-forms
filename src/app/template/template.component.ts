import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  address1: string;
  address2: string;
  city: string;
  region: string;
  postalCode: string;
}

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private http: HttpClient) {}

  user: User = {
    firstName: '',
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

  tasks: any[] = [];   // <-- store fetched data

  firebaseUrl = 'https://book-e2448-default-rtdb.firebaseio.com/tasks';

  ngOnInit(): void {
    this.getData();
  }

  onSubmit(form: any) {
    if (form.valid) {

      this.createTask(); // send to Firebase

      alert('Registration successful!');
      form.reset();

    } else {
      alert('❌ Please fill all required fields correctly.');
    }
  }

  createTask() {
    const headers = new HttpHeaders({ 'myheaders': 'hello world' });

    this.http.post(`${this.firebaseUrl}.json`, this.user, { headers })
      .subscribe({
        next: (response) => {
          console.log('Task saved:', response);
          this.getData();  // refresh list
        },
        error: (err) => {
          console.error('Error:', err);
          alert('Failed to save to Firebase');
        }
      });
  }

  getData() {
    const headers = new HttpHeaders({ 'myheaders': 'hello world' });

    this.http.get<{ [key: string]: User }>(`${this.firebaseUrl}.json`, { headers })
      .subscribe({
        next: (response) => {
          this.tasks = [];

          for (let key in response) {
            this.tasks.push({ id: key, ...response[key] });
          }

          console.log("Fetched:", this.tasks);
        },
        error: (err) => {
          console.error('Error fetching:', err);
          alert('Failed to fetch data from Firebase');
        }
      });
  }

  // ✅ DELETE FUNCTION
  deleteTask(id: string) {
    const headers = new HttpHeaders({ 'myheaders': 'hello world' });

    this.http.delete(`${this.firebaseUrl}/${id}.json`, { headers })
      .subscribe({
        next: () => {
          alert("Deleted Successfully");
          this.getData(); // refresh list
        },
        error: () => {
          alert("Failed to delete task");
        }
      });
  }
}
