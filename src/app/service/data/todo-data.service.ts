import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor( private http: HttpClient) { }

  retriveAllTodos(username){
    return this.http.get<Todo[]>(`${API_URL}/api/users/${username}/todos`);
  }

  deleteTodo(username, id){
    return this.http.delete(`${API_URL}/api/users/${username}/todos/${id}`)
  }

  retriveTodos(username, id){
    return this.http.get<Todo>(`${API_URL}/api/users/${username}/todos/${id}`)
  }

  updateTodos(username, id, todo){
    return this.http.put(`${API_URL}/api/users/${username}/todos/${id}`,todo);
  }

  createTodos(username,todo){
    return this.http.post(`${API_URL}/api/users/${username}/todos`,todo);
  }



}
