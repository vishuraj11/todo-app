import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
//Activated route
massage='wecome here';
name:string='';
massage_new : string='';
  constructor(private route:ActivatedRoute, private welcomeDataService:WelcomeDataService) { }

  ngOnInit() {
console.log(this.massage);
console.log( this.route.snapshot.params['name'])
this.name=  this.route.snapshot.params['name'];
}

welcomeData(){
  this.welcomeDataService.executeHelloWorldBeanService().subscribe( //subscribe is a asyncrunous call
    response=>this.handleSuccess(response),
    error=>this.handleError(error)
    );
    console.log(" last line of welcomeData")
}

getWelcomeData(){
  this.welcomeDataService.executeHelloWorldServiceWithPatVariable(this.name).subscribe( //subscribe is a asyncrunous call
    response=>this.handleSuccess(response),
    error=>this.handleError(error)
    );
    console.log(" last line of welcomeData")
}


handleSuccess(response){
console.log(response);
this.massage_new=response.todoType;

}

handleError(error){
  console.log(error.massage);
}



}
