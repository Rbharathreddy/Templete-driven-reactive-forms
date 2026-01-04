import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
   constructor(private fb: FormBuilder, private router: ActivatedRoute, private userService:UserService) {}

  detailsForm = this.fb.group({
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    pan: ['', [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]]
  });

 submitForm() {
  if (this.detailsForm.invalid) {
    this.detailsForm.markAllAsTouched();
    return;   // Stop here if invalid
  }

  alert("Details submitted successfully!");

  // Navigate on success
  // this.router.navigate(['/forms']);
}


 user: any;


  ngOnInit(): void {
    const id = this.router.snapshot.params['id']

    this.userService.getUser(id).subscribe((users)=>{
      this.user=users
    })

 
  }

}
