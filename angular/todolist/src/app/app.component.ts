import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import TaskInterface from '../interfaces/TaskInterface';

// décorateur de la classe AppComponent avec des arguments () - annotations
@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TodoList';
  tasks: TaskInterface[] = [];
}
