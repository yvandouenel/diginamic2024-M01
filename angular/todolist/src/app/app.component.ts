import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { Title } from '@angular/platform-browser';

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
  /* Injection du service Title */
  constructor(headTitle: Title) {
    headTitle.setTitle('Todo List angular');
  }
}
