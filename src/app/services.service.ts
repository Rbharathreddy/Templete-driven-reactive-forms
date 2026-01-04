import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
     $courseDuration =new BehaviorSubject<string>(" 2monthjs")

  private baseUrl = 'https://example.com/api'; // 🔹 your backend API endpoint

  constructor(private http: HttpClient,private userserivce:UserService) { }

  onSubscribe(type: string) {
    alert(`Thanks for '${type}' subscription. You can access the service now.`);
  }

  // 🔹 Signup API
  signup(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userData);
  }

  // 🔹 Login API
  login(loginData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginData);
  }


  getuseer(){
    console.log("rrrrr")
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
  
      tap(userList=>{
         debugger
         console.log(userList)
  
      }),
      map((userlist) => {
        return userlist.map(user => ({
            id: user.id,
            name: user.name
          })).filter(u => u.id%2===0);
      })
    )
}

}
