import { Injectable } from '@angular/core';
import TaskInterface from '../../interfaces/TaskInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataTasksService {
  constructor(private http: HttpClient) {}
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