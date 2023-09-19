import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubProfile, RepositoryResponse } from '../types/github.types';
import { Observable, map } from 'rxjs';


export const GITHUB_BASE_URL = 'https://api.github.com/users/subhashjha35'

@Injectable({providedIn: 'root'})
export class GithubApiService {
  constructor(private httpClient: HttpClient) { }

  getRepositories = (): Observable<RepositoryResponse> => {
    return this.httpClient.get<RepositoryResponse>(`${GITHUB_BASE_URL}/repos?per_page=100`);
  }

  getOwnRepositories(): Observable<RepositoryResponse> {
    return this.getRepositories().pipe(
      map((repos) => repos.filter(repo => repo.owner.login === 'subhashjha35'))
    )
  }

  getMyProfile(): Observable<GithubProfile> {
    return this.httpClient.get<GithubProfile>(GITHUB_BASE_URL).pipe(
      map(profile => ({ ...profile, following_url: profile.following_url.replace('{/other_user}', '')}))
    );
  }
}
