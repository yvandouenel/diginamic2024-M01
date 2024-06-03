import { Component, Input } from '@angular/core';
import TaskInterface from '../../../interfaces/TaskInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'digi-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  /* Récupération de l'objet task envoyé par le composant parent soit TasksList */
  @Input() task: TaskInterface | undefined;
}
