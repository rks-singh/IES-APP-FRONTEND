import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from './login-form';
import { RegisterFrom } from './register-from';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  // constructor(private http:HttpClient) { }

  handleLogin(login:LoginForm){

    // backend api call.
  }

  handleRegister(register:RegisterFrom){

    //backend api call
  }

 
}
