import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,map } from 'rxjs';

 export interface User {
       "id": number,
      "name": string,
      "email": string,
      "password": string,
      "role": string,
      "dept": string,
      "position": string,
      "office": string,
      "phone": number,
      "manager": string,
      "avatar": string,
      "joinDate": string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl ="http://localhost:3000/users"; // Replace with your backend API URL

  constructor(private http: HttpClient) { }
    
  login(email: string, password: string): Observable<User | null> {
    return this.http
    .get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`)
    .pipe(map((users=>users.length>0 ? users[0] : null)));
   }


    signup(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}