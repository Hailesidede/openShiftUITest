import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../services_/users.service';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  
  
  ngOnInit(): void {
    this.findUsers();
  }

  userService = inject(UsersService)

  users : any[]= []


  findUsers(){
    return this.userService.getAllUsers().subscribe(
      (res: any)=>{
        console.log(res)
        this.users = res;
      },
      (error: HttpErrorResponse)=>{
        console.log(error)
      }
    );
  }

  deleteUser(id:number){
  
    this.userService.deleteUser(id).subscribe(
      (res:any)=>{
        this.findUsers();

      }
    )
   
  }

}
