import { Injectable } from '@angular/core';
import TaskInterface from '../../interfaces/TaskInterface';

@Injectable({
  providedIn: 'root',
})
export class DataTasksService {
  constructor() {}
  loadTasks(): TaskInterface[] {
    return [
      {
        id: 1,
        name: 'Faire la vaisselle',
        done: true,
        comment:
          'Dépêche-toi, je ne supporte pas de voir traîner la vaisselle !',
      },
      {
        id: 2,
        name: 'Faire le ménage',
        done: false,
      },
    ];
  }
}
