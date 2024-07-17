import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { UsersService } from '../services_/users.service';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
;

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  userObj= {
    'name':'',
    'is_kyc_done':true,
    "mobile":"",
     "email":''
  }

  constructor (private userService : UsersService) {}

  router = inject(Router)


  saveUser(){
    console.log(this.userObj);
    return this.userService.createUser(this.userObj).subscribe(
      (res:any)=>{
        console.log(res)
        this.router.navigateByUrl('/layout/users')
      },
      (error : HttpErrorResponse)=>{
        console.log(error)
      }
    );
  }

}