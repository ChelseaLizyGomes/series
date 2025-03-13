import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { take } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos!: Todo[];
  editingId: number | null = null;
  newTodoTitle = '';

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
      });
  }

  removeTodo(todo: Todo): void {
    this.allTodoService
      .deleteTodo(todo.id)
      .pipe(take(1))
      .subscribe((_res) => {
        this.todos = this.todos.filter((delTodo) => delTodo.id !== todo.id);
      });
  }

  updateTodo(todo: Todo): void {
    this.allTodoService
      .editTodo(todo)
      .pipe(take(1))
      .subscribe((_res) => {
        this.editingId = null;
      });
  }

  createTodo(): void {
    const newTodo: Todo = {
      todo: this.newTodoTitle.trim(),
      id: this.todos.length + 1,
      completed: false,
      userId: Math.floor(Math.random() * 10),
    };

    this.allTodoService
      .addTodo(newTodo)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.todos.unshift(res);
          this.newTodoTitle = '';
        } else {
          console.warn('Didint create new todo ', res);
        }
      });
  }
}
