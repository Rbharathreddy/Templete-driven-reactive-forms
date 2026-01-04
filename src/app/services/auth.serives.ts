import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = 'AIzaSyDPHvVX6AXm4vAnoQISr9VuPxBh3s8vnIE';  // <-- replace this

  constructor(private http: HttpClient) {}

  signup(email: string, password: string): Observable<any> {
    const signupData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
      signupData
    );
  }

  login(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
      loginData
    );
  }
}
