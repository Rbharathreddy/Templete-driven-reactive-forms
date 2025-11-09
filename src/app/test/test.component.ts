import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnChanges {
  @Input() editData: any = null;
  @Output() dataAdded = new EventEmitter<void>();

  // ✅ Include 'id' here so TS recognizes it
  company = {
    id: 0,
    companyId: '',
    name: '',
    email: '',
    mobileNumber: ''
  };

  editMode = false;
  private apiUrl = 'http://localhost:3000/companies';

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editData'] && this.editData) {
      this.company = { ...this.editData };
      this.editMode = true;
    }
  }

  onSubmit() {
    if (this.editMode) {
      this.updateCompany();
    } else {
      this.addCompany();
    }
  }

  addCompany() {
    // Auto-generate unique ID
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      const newId = data.length ? Math.max(...data.map(c => c.id || 0)) + 1 : 1;
      const newCompany = { ...this.company, id: newId };

      this.http.post(this.apiUrl, newCompany).subscribe(() => {
        alert('Company added successfully!');
        this.dataAdded.emit();
        this.resetForm();
      });
    });
  }

updateCompany() {
  console.log('Updating company:', this.company);  // ✅ add this log
  if (!this.company.id) {
    alert('Invalid company ID!');
    return;
  }

  this.http.put(`${this.apiUrl}/${this.company.id}`, this.company).subscribe({
    next: () => {
      alert('Company updated successfully!');
      this.dataAdded.emit();
      this.resetForm();
    },
    error: (err) => console.error('Update failed:', err)
  });
}


  resetForm() {
    // ✅ Reset must include id to match definition
    this.company = {
      id: 0,
      companyId: '',
      name: '',
      email: '',
      mobileNumber: ''
    };
    this.editMode = false;
  }
}
