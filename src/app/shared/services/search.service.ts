import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {environment as environmentProd} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_URL = 'https://www.googleapis.com/youtube/v3';
  private API_KEY = environmentProd.GOOGLE_API_KEY;

  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Referrer-Policy', 'no-referrer');
  }

  

  getVideos(query: string): Observable <any> {
    const url = `${this.API_URL}/search?q=${query}&key=${this.API_KEY}&part=snippet&type=video&maxResults=4`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }


}