import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: TasksListComponent },
  { path: 'about', component: AboutComponent },
];
