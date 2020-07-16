import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
export class EntityTodos{
  constructor(public todoType : string,  public todoDate : Date ){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient ) { }

  executeHelloWorldBeanService(){
   return  this.http.get<EntityTodos>('http://localhost:8080/api/create-todo')
   // console.log("executeHelloWorldBeanService");
  }

  executeHelloWorldServiceWithPatVariable(name){

    // let basicAuthString=this.createBasibAuth();

    // let headers= new HttpHeaders({
    //   Authorization: basicAuthString
    // });

    return this.http.get<EntityTodos>(`${API_URL}/api/create-todo/${name}`,
    //{headers}
    );
  }


  // createBasibAuth(){
  //   let username='rajendra'
  //   let password= 'rajendra'

  //   let basicAuthHeaderString= 'Basic ' + window.btoa(username+':'+password)
  //   return basicAuthHeaderString;
  // }
}
