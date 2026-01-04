import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit, OnChanges {
  @Input() refresh: boolean = false;
  @Output() editCompany = new EventEmitter<any>();

  companies: any[] = [];
  private apiUrl = 'http://localhost:3000/companies';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['refresh']) {
      this.loadData();
    }
  }

  loadData() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.companies = data;
    });
  }

  deleteCompany(id: number) {
    if (confirm('Are you sure you want to delete this company?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
        alert('Company deleted successfully!');
        this.loadData();
      });
    }
  }

  onEdit(company: any) {
    this.editCompany.emit(company);
  }
}
