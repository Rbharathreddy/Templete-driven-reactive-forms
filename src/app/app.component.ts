import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ServicesService } from './services.service';
import { BehaviorSubject, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Company Management System';
  showForm = false;
  refreshList = false;
  companyToEdit: any = null;
   studentname$ = new Subject()
   rollno$=new Subject <number>()



  constructor(private service: ServicesService) {
    
       this.service.getuseer().subscribe((res: any) => {
      console.log(res);
    });

    setTimeout(()=>{
      this.studentname$.next("angular 20")
      this.rollno$.next(123)
      this.service.$courseDuration.next("3 week +months")
    })
   }



  // ngOnInit(): void {

  //   this.userservice.getuseer().subscribe((res: any) => {
  //     console.log(res);
  //   });

  //    this.userservice.getSingleUser1().subscribe((res1: any) => {
  //     console.log(res1);
  //   });


//   // }

ngOnInit(): void {
  this.studentname$.subscribe((res:any)=>{
    debugger
  })
    this.rollno$.subscribe((res:any)=>{
    debugger
  })



  this.service.$courseDuration.subscribe((res:any)=>{
    debugger
  })
}


  // toggleForm() {
  //   this.showForm = !this.showForm;
  //   if (!this.showForm) {
  //     this.companyToEdit = null;
  //   }
  // }

  // onDataAddedOrUpdated() {
  //   this.showForm = false;
  //   this.refreshList = !this.refreshList; // Trigger reload
  // }

  // onEditCompany(company: any) {
  //   this.companyToEdit = company;
  //   this.showForm = true;
  // }

  
   mobiles = [
    { mobile: "Samsung Galaxy M55", price: 46000, ram: "8GB", storage: "128GB" },
    { mobile: "real me 5 pro", price: 25000, ram: "16GB", storage: "64GB" },
  ];

  showPopup = false;
  isEditMode = false;
  editIndex: number | null = null;

  mobile = '';
  price = '';
  ram = '';
  storage = '';

  buttonText = 'Save';  // Default

  openPopup() {
    this.showPopup = true;
    this.isEditMode = false;
    this.buttonText = "Add Mobile";
    this.clearForm();
  }

  closePopup() {
    this.showPopup = false;
  }

  onChange() {
    if (this.isEditMode) {
      this.buttonText = "Update";
    } else {
      this.buttonText = "Add Mobile";
    }
  }

  saveMobile() {
    if (!this.mobile || !this.price || !this.ram || !this.storage) {
      alert("All fields are required");
      return;
    }

    const data = {
      mobile: this.mobile,
        price: Number(this.price),   
      ram: this.ram,
      storage: this.storage
    };

    if (this.isEditMode && this.editIndex !== null) {
      this.mobiles[this.editIndex] = data;
    } else {
      this.mobiles.push(data);
    }

    this.closePopup();
  }

  editMobile(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    this.showPopup = true;
    this.buttonText = "Update";

    const m = this.mobiles[index];
    this.mobile = m.mobile;
    this.price = String(m.price);
    this.ram = m.ram;
    this.storage = m.storage;
  }

  deleteMobile(i: number) {
    if (confirm("Delete this mobile?")) {
      this.mobiles.splice(i, 1);
    }
  }

  clearForm() {
    this.mobile = '';
    this.price = '';
    this.ram = '';
    this.storage = '';
  }

}