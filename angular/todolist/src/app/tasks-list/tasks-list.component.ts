import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import TaskInterface from '../../interfaces/TaskInterface';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'digi-tasks-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  /* Récupération du titre donné par le parent */
  @Input() title: string = '';

  /* propriété task qui permettra de donner des valeurs au composant enfant Task */
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
}
