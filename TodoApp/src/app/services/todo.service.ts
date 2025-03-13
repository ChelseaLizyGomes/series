import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AllTodo, Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = environment.apiUrl;

  private http = inject(HttpClient);

  //read all
  getAllTodos(): Observable<AllTodo> {
    return this.http.get<AllTodo>(this.apiUrl);
  }

  //read by id
  getTodoById(id: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/${id}`);
  }

  //update
  editTodo(updatedTodo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${updatedTodo.id}`, {
      todo: updatedTodo.todo,
    });
  }

  //create
  addTodo(newTodo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Todo>(url, newTodo);
  }

  //delete
  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.apiUrl}/${id}`);
  }
}
