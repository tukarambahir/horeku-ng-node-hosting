import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:4000/user'
  constructor(private router: Router,
    private httpClient: HttpClient) { }

  loadUserDetails(email : string){
    console.log('inside user service '+email)

    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    const body = {
     Email:email
    }

    return this.httpClient.post(this.url + '/getDetails', body)
  }

  
}
