import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { tap } from 'rxjs';
import { map, filter, mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';



  

  constructor(private http: HttpClient) {}

  getUser(id:number)
  {
   return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
  }

  // Step 1: Get all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      // Step 2: Transform data using map
      map(users => users.map(u => ({ id: u.id, name: u.name, email: u.email }))),
      // Step 3: Filter users (e.g., only those with even ID)
      map(users => users.filter(u => u.id % 2 === 0))
    );
  }

  // Step 4: Get posts for a user (used with mergeMap/switchMap)
  getUserPosts(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  }

  // Step 5: Combine both APIs using mergeMap (parallel) or switchMap (latest only)
  getUsersWithPostsMergeMap(): Observable<any> {
    return this.getUsers().pipe(
      mergeMap(users => of(...users)),  // flatten user array
      mergeMap(user =>
        this.getUserPosts(user.id).pipe(
          map(posts => ({ ...user, postsCount: posts.length }))
        )
      )
    );
  }

  getUsersWithPostsSwitchMap(selectedUserId: number): Observable<any> {
    // If user selection changes rapidly (e.g., via dropdown), switchMap cancels old requests
    return of(selectedUserId).pipe(
      switchMap(id =>
        this.getUserPosts(id).pipe(
          map(posts => ({ userId: id, posts }))
        )
      )
    );
  }

// getuseer(){
//   console.log("rrrrr")
//   return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(

//     tap(userList=>{
//        debugger

//     }),
//     map((userlist) => {
//       return userlist.map(user => ({
//           id: user.id,
//           name: user.name
//         })).filter(u => u.id%2===0);
//     })
//   );
// }

getSingleUser1(){
  return this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(
    tap(userData => userData)
  );

}







}
