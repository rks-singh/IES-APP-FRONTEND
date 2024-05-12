import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LoginForm } from '../login-form';
import { FormsModule } from '@angular/forms';
import { LoginRegisterService } from '../login-register.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RegisterComponent,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService:LoginRegisterService, private route:Router){}

  login:LoginForm = new LoginForm("","");


  handleLogin(){
    console.log(this.login)

    this.loginService.handleLogin(this.login);
    
    this.route.navigateByUrl("dashboard");
  }
}
