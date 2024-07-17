import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root' // Ensure it's provided in the root
})
export class UsersService {
  // private baseURL = "https://userservice-hailekesekwa-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/"
  private baseURL = "http://localhost:8080/"



  constructor(private http: HttpClient) {}

  createUser(obj: any) {
    return this.http.post(`${this.baseURL}users`, obj);
  }

  getAllUsers(){
    return this.http.get(`${this.baseURL}users`)
  }

  deleteUser(id :number){
   return this.http.delete(`${this.baseURL}users/delete/${id}`)
  }
}
