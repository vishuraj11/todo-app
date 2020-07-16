import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {


  constructor() { }

  authenticate(username, password){

    console.log("before" + this.isUserLoggedIn())
    if(username==="rajendra" && password==="rajendra"){
      sessionStorage.setItem('authentticaterUser',username);
      console.log("after" + this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user= sessionStorage.getItem('authentticaterUser');
    return !(user === null);
  }

  logOutUser() {
    sessionStorage.removeItem('authentticaterUser');
    
  }
}
