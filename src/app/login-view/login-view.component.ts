import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  email:String = "";
  password:String = "";

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    if(this.email != "" && this.password != ""){
      
    } else {
      alert("Preencha todos os campos!");
    }
  }

  forgotPassword(){
    if(this.email != "") {
      console.log("Redefinição de senha por e-mail");
    } else {
      alert("Informe o e-mail!")
    }
  }

}
