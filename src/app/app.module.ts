import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { SearchListComponent } from './search/search-list/search-list.component';
import { SearchContainerComponent } from './search/search-container/search-container.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoFrameComponent } from './search/video-frame/video-frame.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TransitionScreenComponent } from './transition-screen/transition-screen.component';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CarouselComponent } from './carousel/carousel.component';
import { VideosDisplayComponent } from './videos-display/videos-display.component';
import { VideoComponent } from './video/video.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { SearchDialog } from './search-dialog/search-dialog.component';
import { GokuGokupowerupComponent } from './goku-gokupowerup/goku-gokupowerup.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import {environment as environmentProd} from '../environments/environment.prod';

const googleLoginOptions: any = {
  scopes: 'https://www.googleapis.com/auth/youtube.readonly'
};

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchListComponent,
    SearchContainerComponent,
    VideoFrameComponent,
    LandingPageComponent,
    MainPageComponent,
    TransitionScreenComponent,
    CarouselComponent,
    VideosDisplayComponent,
    VideoComponent,
    SearchDialog,
    GokuGokupowerupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule. forRoot([
      {path: '', component: MainPageComponent},
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    SocialLoginModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environmentProd.GOOGLE_API_KEY,
              googleLoginOptions
            )
          }
        ],
         onError: (err:any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
     {
        provide: HAMMER_GESTURE_CONFIG, 
        useClass: HammerGestureConfig
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }