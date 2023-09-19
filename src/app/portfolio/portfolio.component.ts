import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import * as Typed from 'typed.js';

import { socialMediaArray } from '../shared/constants/links.constant';
import { GithubApiService } from '../services/github.service';
import { GithubProfile, RepositoryResponse } from '../types/github.types';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

  githubApiService = inject(GithubApiService);
  private _router = inject(Router);

  githubRepositories: RepositoryResponse = [];

  myGithubProfile: GithubProfile | undefined;

  hover: number = -1;
  socialMediaList = socialMediaArray;

  handleHoverOnSocialMedia = (index: number) => {
    this.hover = index;
  }

  ngOnInit() {
    this.githubApiService.getMyProfile().subscribe((profile)=> this.myGithubProfile = profile);

    if (this._router.url == '/') {
      $('.particles-js-canvas-el').css('visibility', 'visible');
    }
    let trackClass: string;

    if (this._router.url == '/') {
      $('.particles-js-canvas-el').css('visibility', 'visible');
    }

    let options = {
      strings: [
        'am a Frontend Developer.',
        'use Angular for building applications',
        'love writing maintainable code',
      ],
      typeSpeed: 50,
      backSpeed: 3,
      showCursor: true,
      cursorChar: '/',
      loop: true,
    };
    // @ts-ignore
    let typed = new Typed('.typed', options);
  }
}
