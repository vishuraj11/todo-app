import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
 constructor(public id: number,
  public desc: string,
  public done: boolean,
  public targetDate: Date){
 
 }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos : Todo[];
  massage : string;

  //  =[
//  new Todo(1,'learn todos',false,new Date()),
//  new Todo(2,'learn dance',false,new Date()),
//  new Todo(3,'learn angular',false,new Date()),
//  new Todo(4,'learn flex',false,new Date()),
 
// ]
//   todo={
//    id:1,
//    desc:'learn todos'
//  }

  constructor(private todoService: TodoDataService, private router:Router) { }

  ngOnInit() {
 this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retriveAllTodos('rajendra').subscribe(
      response=>{
        console.log(response);
        this.todos=response;
      }
    );
  }

  deleteTodo(id){
    this.todoService.deleteTodo('rajendra',id).subscribe(
      response=>{
        console.log(" delete successful ");
       this.massage = 'delete Successful ';
       this.refreshTodos();
      }
    );
  }


  updateTodo(id){
    this.router.navigate(['todos', id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }
}
