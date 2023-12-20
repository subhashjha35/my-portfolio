import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DEV_TO_URL } from 'src/environments/environment';
import { DevToArticles } from '../types/dev-to.types';


@Injectable({ providedIn: 'root' })
export class DevToApiService {
  constructor(private httpClient: HttpClient) { }

  getUserArticles = (): Observable<DevToArticles> => {
    return this.httpClient.get<DevToArticles>(`${DEV_TO_URL}/articles/me`);
  };
}
