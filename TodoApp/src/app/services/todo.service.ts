import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllTodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://dummyjson.com/todos';

  private http = inject(HttpClient);

  getAllTodos(): Observable<AllTodo> {
    return this.http.get<AllTodo>(this.apiUrl);
  }
}
