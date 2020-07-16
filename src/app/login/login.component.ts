import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string= "rajendra";
  password : string= "rajendra";
  errorMassage="invalid credential";
  invalidLogin: boolean=false;
  constructor(private rout:Router, private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username);
    // if(this.username==="rajendra" && this.password==="rajendra"){
     if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.invalidLogin=false;
      this.rout.navigate(["welcome",this.username]);
    }else{
      this.invalidLogin=true;

    }
  }

  handleBasicAuthLogin(){

     this.basicAuthenticationService.executeBasicAuthService(this.username,this.password)
      .subscribe(
        data=>{
          this.invalidLogin=false;
          this.rout.navigate(["welcome", this.username]);
        },
        error=>{
          this.invalidLogin=true;
        }
      )
     
    }


    handleJwtAuthLogin(){

      this.basicAuthenticationService.executeJwtAuthService(this.username,this.password)
       .subscribe(
         data=>{
           this.invalidLogin=false;
           this.rout.navigate(["welcome", this.username]);
         },
         error=>{
           this.invalidLogin=true;
         }
       )
      
     }
  
}
