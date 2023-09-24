import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { DevToApiService } from '../services/dev-to.service';
import { GithubApiService } from '../services/github.service';
import { socialMediaArray } from '../shared/constants/links.constant';
import { DevToArticles } from '../types/dev-to.types';
import { GithubProfile, RepositoryResponse } from '../types/github.types';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

  githubApiService = inject(GithubApiService);
  devToApiService = inject(DevToApiService);
  private _router = inject(Router);

  githubRepositories: RepositoryResponse = [];

  myGithubProfile: GithubProfile | undefined;

  devToArticles: DevToArticles = [];

  hover: number = -1;
  socialMediaList = socialMediaArray;

  handleHoverOnSocialMedia = (index: number) => {
    this.hover = index;
  }

  ngOnInit() {
    this.githubApiService.getMyProfile().subscribe((profile)=> this.myGithubProfile = profile);

    this.devToApiService.getUserArticles().subscribe((articles) => this.devToArticles = articles);

    if (this._router.url == '/') {
      $('.particles-js-canvas-el').css('visibility', 'visible');
    }
  }
}
