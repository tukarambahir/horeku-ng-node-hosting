import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Name=''
  Email=''
  Password=''
  Phone=0
  Lastname=''

  constructor( private router: Router,
    private adminService: AuthService) { }

  ngOnInit(): void {
  }


  

    onSignup() {
      console.log(this.Email +' ' +this.Password)
      this.adminService
        .signup(this.Email,this.Password,this.Name,this.Lastname)
        .subscribe(response => {
          console.log(response)
          if(response){
            alert('Succefully signed up ')
            this.router.navigate(['/home'])
          }
        })

    }
  

}
