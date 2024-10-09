import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = '/api';

  constructor(private http: HttpClient) {}

  get<R>(endpoint: string): Observable<R> {
    return this.http.get<R>(`${this.API_URL}${endpoint}`);
  }

  patch<B,R>(endpoint: string, body: B): Observable<R> {
    return this.http.patch<R>(`${this.API_URL}${endpoint}`, body);
  }

  post<B,R>(endpoint: string, body: B): Observable<R> {
    return this.http.post<R>(`${this.API_URL}${endpoint}`, body);
  }

  delete<R>(endpoint: string): Observable<R> {
    return this.http.delete<R>(`${this.API_URL}${endpoint}`);
  }
}
