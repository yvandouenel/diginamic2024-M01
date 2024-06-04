import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import TaskInterface from '../../interfaces/TaskInterface';
import { TaskComponent } from './task/task.component';
import { DataTasksService } from '../services/data-tasks.service';

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
  tasks: TaskInterface[] = [];
  onClickValidate(id: number) {
    console.log(`Récupération id dans tasks-list`, id);
    this.tasks = this.tasks
      .map((task) => {
        if (task.id === id) return { ...task, done: !task.done };
        return task;
      })
      .sort((a, b) => Number(a.done) - Number(b.done));
  }
  constructor(private DataTasksService: DataTasksService) {
    this.tasks = this.DataTasksService.loadTasks().sort(
      (a: TaskInterface, b: TaskInterface) => Number(a.done) - Number(b.done)
    );
  }
}
