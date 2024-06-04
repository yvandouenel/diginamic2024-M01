import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import TaskInterface from '../../interfaces/TaskInterface';
import { TaskComponent } from './task/task.component';
import { DataTasksService } from '../services/data-tasks.service';
import { FormTaskComponent } from './form-task/form-task.component';

@Component({
  selector: 'digi-tasks-list',
  standalone: true,
  imports: [CommonModule, TaskComponent, FormTaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  title: string = 'Todo List';

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
  /* injection de dépendance pour récupérer les tâches via un service - ici DataTasksService */
  constructor(private dataTasksService: DataTasksService) {}
  ngOnInit(): void {
    // Voilà la souscription
    // Quand il y aura une notification next, alors tasks sera réassignée
    this.dataTasksService.loadTasks().subscribe({
      next: (tasks: TaskInterface[]) => {
        this.tasks = tasks;
      },
      error: (error) => {
        console.error(`Erreur catchée dans le composant tasks-list : `, error);
      },
    });

    // Souscription à newTask$
    this.dataTasksService.getNewTaskObservable().subscribe({
      next: (partialTask: object) => {
        console.log(`taskPartial dans composant tasks-list`, partialTask);
        this.addTask(partialTask);
      },
    });
  }
  addTask(partialTask: object) {
    // Ajout d'une nouvelle tâche
    const newTask = {
      id: 0,
      done: false,
      name: '',
      comment: '',
      ...partialTask,
    };
    this.tasks.push(newTask);
  }
}
