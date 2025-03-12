import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { take } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos!: Todo[];

  private allTodoService = inject(TodoService);

  ngOnInit(): void {
    this.loadAllTodos();
  }

  loadAllTodos(): void {
    this.allTodoService
      .getAllTodos()
      .pipe(take(1))
      .subscribe((all) => {
        this.todos = all.todos;
        console.log('all todos:', this.todos);
      });
  }
}
