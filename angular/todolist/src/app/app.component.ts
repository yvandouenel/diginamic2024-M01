import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import TaskInterface from '../interfaces/TaskInterface';
import { FormsModule } from '@angular/forms';
import { Observable, interval } from 'rxjs';

// décorateur de la classe AppComponent avec des arguments () - annotations
@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TodoList';
  tasks: TaskInterface[] = [
    {
      id: 1,
      name: 'Faire la vaisselle',
      done: false,
    },
    {
      id: 2,
      name: 'Faire les courses',
      done: true,
      comment: 'Ne pas oublier la liste',
    },
  ];
  logValue = (text: string) => {
    console.log(`texte `, text);
  };
  lastName = '';
  data$: Observable<number>;
  constructor() {
    /* data$ est un observable qui va émettre une valeur (notification next ) */
    this.data$ = interval(1000);
  }
}
