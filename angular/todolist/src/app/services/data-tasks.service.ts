import { Injectable } from '@angular/core';
import TaskInterface from '../../interfaces/TaskInterface';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataTasksService {
  private newTask$;
  constructor(private http: HttpClient) {
    this.newTask$ = new Subject();
  }
  /**
   * Emet une notification next depuis l'observable newTask$
   * @param partialTask
   */
  emitNewTaskObservable(partialTask: object): void {
    this.newTask$.next(partialTask);
  }
  /**
   * Renvoie une référence à l'observable newTask$
   * @returns Observable
   */
  getNewTaskObservable(): Observable<any> {
    return this.newTask$.asObservable();
  }
  /**
   * Méthode qui renvoie un observable de tableau de tâches (froid par défaut)
   * @returns Observable<TaskInterface[]>
   */
  loadTasks(): Observable<TaskInterface[]> {
    const url = 'http://localhost:3000/tasks';
    const params = { status: 'PENDING' };
    return this.http.get<Array<TaskInterface>>(url, { params }).pipe(retry(3));
  }
}
