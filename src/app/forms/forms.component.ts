import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  usersForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usersForm = this.fb.group({
      users: this.fb.array([this.createUser()])
    });
  }

  // Getter for users array
  get users(): FormArray {
    return this.usersForm.get('users') as FormArray;
  }

  // Create a user form group
  createUser(): FormGroup {
    return this.fb.group({
      image: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      dob: [''],
      gender: ['male'],
      street: [''],
      country: ['India'],
      city: [''],
      region: [''],
      postal: [''],
      skills: this.fb.array([])
    });
  }

  // Add user
  addUser() {
    this.users.push(this.createUser());
  }

  // Remove user
  removeUser(index: number) {
    this.users.removeAt(index);
  }

  // Username generator
  generateUsername(i: number) {
    const user = this.users.at(i);
    const first = user.value.firstName?.toLowerCase();
    const last = user.value.lastName?.toLowerCase();

    if (first && last) {
      user.patchValue({ username: `${first}_${last}` });
    } else {
      user.patchValue({ username: `user_${i}` });
    }
  }

  // Get SKILLS FormArray safely (fixes TS error)
  getSkillsControl(i: number): FormArray {
    return this.users.at(i).get('skills') as FormArray;
  }

  addSkill(i: number) {
    this.getSkillsControl(i).push(this.fb.control(''));
  }

  removeSkill(i: number, j: number) {
    this.getSkillsControl(i).removeAt(j);
  }

  // Image upload preview
  uploadImage(event: any, i: number) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.users.at(i).patchValue({
        image: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    console.log("Final Data:", this.usersForm.value);
    alert("Form Submitted! Check console.");
  }
}
