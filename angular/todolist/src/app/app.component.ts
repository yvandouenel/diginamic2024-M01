import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import TaskInterface from '../interfaces/TaskInterface';
import { FormsModule } from '@angular/forms';
import { Observable, interval, map, startWith } from 'rxjs';
import { TasksListComponent } from './tasks-list/tasks-list.component';

// décorateur de la classe AppComponent avec des arguments () - annotations
@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, TasksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titleTodoList = 'TodoList';
  constructor() {}
}
