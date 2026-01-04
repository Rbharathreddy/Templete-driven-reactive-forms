import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { of ,from} from 'rxjs';
@Component({
  selector: 'app-euser',
  templateUrl: './euser.component.html',
  styleUrls: ['./euser.component.css']
})
export class EuserComponent implements OnInit {

  users: any[] = [];
  data1:any[]=[]
  constructor(private userService:UserService ){}
  
 ngOnInit(): void {
  this.userService.getUsers().subscribe((data:any) => {
    this.data1 =data;   
  });
}




  // loadUsers() {
  //   // Create an Observable with static data using 'of'
  //   const userObservable =of (
  //     { id: 1, name: 'John Doe', email: 'john@example.com' },
  //     { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  //     { id: 3, name: 'Mike Johnson', email: 'mike@example.com' ,nameee:'eeeees'}
  //   )

  //   // Subscribe to the Observable to get the emitted values
  //   userObservable.subscribe({
  //     next: (user) => {
  //       // push each emitted user object into users array
  //       this.users.push(user);
  //     },
  //     complete: () => console.log('All users emitted successfully!')
  //   });
  //   console.log(this.users)
  // }

// ngOnInit(): void {
//   return this.userService.getUser().subscribe((data)=>{
//      this.data1= data
//   })
// }
  
}
