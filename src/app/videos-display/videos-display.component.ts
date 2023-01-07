import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-display',
  templateUrl: './videos-display.component.html',
  styleUrls: ['./videos-display.component.scss']
})
export class VideosDisplayComponent implements OnInit {

  @Input() videos: any;
  @Input() search: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
