import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

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
  tasks = [
    { id: 1, name: 'Faire la vaiselle', done: true },
    { id: 2, name: 'Déclarer les impôts', done: false },
  ];
}
