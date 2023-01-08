import { GoogleLoginProvider, SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { SearchDialog } from "../search-dialog/search-dialog.component";
import { SearchService } from "../shared/services/search.service";
import { map } from "rxjs";

@Component({
  selector: 'app-main-page',
  template: '<youtube-player"></youtube-player>',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})


export class MainPageComponent implements OnInit {
  user: any;
  currentPlaying: any = false;
  currentSearching: any=false;
  screenWidth:any;
  url: any = null;
  loggedIn: boolean = true;
  isLoading: boolean = true;
  private accessToken = '';
  likedVideos: any;
  popularVideos: any;
  sliderArray: any = [];
  popularMusicArray: any = [];
  searchVideosArray: any = [];
  inputValue: any = '';

  constructor(private router: Router, 
      private authService: SocialAuthService,
      private httpClient: HttpClient,
      public dialog: MatDialog,
      private searchService: SearchService
    ) { }

  async getAccessToken() {
    await this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then( (temp) => {
      this.accessToken = temp
      this.getPopularMusicVideo()
      this.getLikedVideos()

    }
      
    );
  }

  playThis(song: any)
  {
    this.url = song;
    this.currentSearching = false;
    this.currentPlaying = true;
    
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    this.screenWidth = window.innerWidth-10;  
    if(this.screenWidth>600)
    {
      this.screenWidth=600;
    }
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.authService.authState.subscribe((user) => { 
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn)
        {
          this.getAccessToken()
        }

    });
    
  }

  openDialog()
  {
    const dialogRef = this.dialog.open(SearchDialog, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }


  getLikedVideos(): void {
    this.isLoading = true;
    if(!this.accessToken) return;
    this.httpClient
    .get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&maxResults=10'
    ,{headers: {Authorization: `Bearer ${this.accessToken}`,Accept: `application/json`}}
    ).pipe(
        map((response: any) => response.items)
      )
    .subscribe((items: any) => 
    {
      
      this.sliderArray = items.map((item: any) => {
          return {
            title: item.snippet.title,
            id: item.id.videoId,
            channel: item.snippet.channelTitle,
            published: new Date(item.snippet.publishedAt),
            img: item.snippet.thumbnails.high.url
          };
        });


      setTimeout(() => 
      {
        this.isLoading = false;
      }, 5000)
 
    })
  }

  getPopularMusicVideo(): void {
    if(!this.accessToken) return;
    this.httpClient
    .get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=VN&videoCategoryId=10&maxResults=2'
    ,{headers: {Authorization: `Bearer ${this.accessToken}`,Accept: `application/json`}}
    ).pipe(
        map((response: any) => response.items)
      )
    .subscribe((items:any) => 
    {
      this.popularMusicArray = items.map((item: any) => {
          return {
            title: item.snippet.title,
            id: item.id.videoId,
            channel: item.snippet.channelTitle,
            published: new Date(item.snippet.publishedAt),
            img: item.snippet.thumbnails.high.url
          };
        });
 
    })
  }

  searchVideos()
  {
    this.searchService.getVideos(this.inputValue)
      .subscribe((items : any) => {
        this.searchVideosArray = items.map((item: any) => {
          return {
            title: item.snippet.title,
            id: item.id.videoId,
            channel: item.snippet.channelTitle,
            published: new Date(item.snippet.publishedAt),
            img: item.snippet.thumbnails.high.url
          };
        });
      });

    this.currentSearching = true
  }

}
