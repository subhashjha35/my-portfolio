import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevToArticles } from '../types/dev-to.types';

export const DEV_TO_URL = '/api/devto';

@Injectable({ providedIn: 'root' })
export class DevToApiService {
  constructor(private httpClient: HttpClient) {}

  getUserArticles = (): Observable<DevToArticles> => {
    return this.httpClient.get<DevToArticles>(`${DEV_TO_URL}/articles/me`);
  };
}
