
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  address = ''
  city = ''
  zip = 0
  contact = ''
  username=''
  
  email = sessionStorage['Email']
  constructor(private userService: UserService) { 

    this.loadUserDetails()
  }
  

  ngOnInit(): void {
  }
  loadUserDetails(){
    console.log(this.email)

    this.userService.loadUserDetails(this.email)
    .subscribe(response=>{
    

      if(response['status']=='success'){

        const data = response['data']
        console.log(data)
        const user =data['User']

        this.address = user['address']
        this.city = user['city']
        this.contact = user['phone']
        this.zip = user['zip']
        this.username = user['firstName'] + " "+ user['lastName']
      }

    })

  }

}
