import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import type { iTask } from '@wato/models';
import { ApiService } from "../core/services/api.service";

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks$ = signal<iTask[]>([]);  // Signal for local state

  constructor(private readonly apiService: ApiService) {
  }

  fetchTasks(): Observable<iTask[]> {
    return this.apiService.get<iTask[]>('/api/tasks').pipe(
      map(tasks => {
        this.tasks$.set(tasks);
        return tasks;
      })
    );
  }

  getTasksSignal() {
    return this.tasks$;
  }

  markTaskAsDone(taskId: string): Observable<iTask> {
    return this.apiService.patch<undefined, iTask>(`/api/tasks/${taskId}`, undefined).pipe(
      map(updatedTask => {
        const updatedTasks = this.tasks$().map(task =>
          task._id === taskId ? updatedTask : task
        );
        this.tasks$.set(updatedTasks);  // Update the signal
        return updatedTask;
      })
    );
  }
}
