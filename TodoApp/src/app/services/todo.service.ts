import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AllTodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = environment.apiUrl;

  private http = inject(HttpClient);

  getAllTodos(): Observable<AllTodo> {
    return this.http.get<AllTodo>(this.apiUrl);
  }
}
