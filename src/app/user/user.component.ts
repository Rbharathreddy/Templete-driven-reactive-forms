
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  userPosts: any;
  selectedUserId: number | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // 🔹 Example 1: Basic map + filter
    this.userService.getUsers().subscribe(data => {
      console.log('Filtered Users:', data);
      this.users = data;
    });

    // 🔹 Example 2: mergeMap (fetch users + their posts)
    this.userService.getUsersWithPostsMergeMap().subscribe(data => {
      console.log('User with post count:', data);
    });
  }

  onUserSelect(id: number) {
    this.selectedUserId = id;
    // 🔹 Example 3: switchMap (cancel previous calls)
    this.userService.getUsersWithPostsSwitchMap(id).subscribe(data => {
      console.log('Latest User Posts:', data);
      this.userPosts = data.posts;
    });
  }
}


