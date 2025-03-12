import { Routes } from '@angular/router';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'todo/:id',
    component: TodoDetailComponent,
  },
];
