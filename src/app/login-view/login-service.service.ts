import { UserInterface } from './userInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url:String = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<UserInterface[]>{
    return this.httpClient.get<UserInterface[]>(`${this.url}`);
  }

  getByEmail(email: String): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(`${this.url}?email=${email}`);
  }
}
