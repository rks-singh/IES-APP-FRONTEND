import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterFrom } from '../register-from';
import { LoginRegisterService } from '../login-register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  message:string="";
  register:RegisterFrom = new RegisterFrom("","","");

  constructor(private registerService:LoginRegisterService){}

  handleRegister(){
    this.message="Registration Successfull!!"
    console.log(this.register);
    
    this.registerService.handleRegister(this.register);
  }
}
