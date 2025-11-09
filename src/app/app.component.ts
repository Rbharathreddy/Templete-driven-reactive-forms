import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Company Management System';
  showForm = false;
  refreshList = false;
  companyToEdit: any = null;

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.companyToEdit = null;
    }
  }

  onDataAddedOrUpdated() {
    this.showForm = false;
    this.refreshList = !this.refreshList; // Trigger reload
  }

  onEditCompany(company: any) {
    this.companyToEdit = company;
    this.showForm = true;
  }


  
}
