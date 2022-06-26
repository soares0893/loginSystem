import { UserInterface } from './userInterface';
import { LoginServiceService } from './login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  usersArray:UserInterface[] = [];

  email:String = "admin@admin.com";
  password:String = "";

  constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.getByEmail(this.email).subscribe(users => {
      if(this.email == users[0].email && this.password == users[0].password ){
        alert("Login realizado com sucesso!")
      } else {
        alert("Dados inválidos!")
      }
    });    

  }

  forgotPassword(){
    if(this.email != "") {
      console.log("Redefinição de senha por e-mail");
    } else {
      alert("Informe o e-mail!")
    }
  }

}
