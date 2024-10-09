import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/today', pathMatch: 'full'},
  {path: 'today', loadComponent: () => import('../today/pages/today/today.component').then(m => m.TodayComponent)},
  {
    path: 'tasks/add',
    loadComponent: () => import('../task/pages/add-task/add-task.component').then(m => m.AddTaskComponent)
  },
  {path: '**', redirectTo: '/today'}
];
