import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';-1 % 5
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],

})
export class CarouselComponent implements OnInit {
  direction: string = '';
  _slides: any = []
  prevImg: any;
  currentImg: any;
  nextImg: any;
  prevIndex: number=0;
  currentIndex: number=1;
  nextIndex:number=2;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  swipeCoord: any = [];
  swipeTime: any;
  subscription: any;

  dragging: boolean=false;
  song: any;
  @Output() songEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Input() set slides(value: any){
    this._slides = value;
    this.prevImg = value[this.prevIndex]?.img
    this.currentImg = value[this.currentIndex]?.img
    this.nextImg = value[this.nextIndex]?.img
  }
  

  constructor() { }

  playThis()
  {
    this.song = this._slides[this.currentIndex].id;
    this.songEmitter.emit(this.song);
  }

  ngOnInit(): void {
    const source = interval(7000);
    this.subscription = source.subscribe(_ => this.goNext());

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  goNext()
  {
    this.nextIndex = (this.nextIndex+1) % (this._slides.length)
    this.currentIndex = (this.currentIndex+1) %( this._slides.length)
    this.prevIndex = (this.prevIndex+1) %( this._slides.length)
    this.prevImg = this._slides[this.prevIndex].img
    this.currentImg = this._slides[this.currentIndex].img
    this.nextImg = this._slides[this.nextIndex].img
  }

  goBackWard()
  {
    this.nextIndex = (this.nextIndex-1) < 0 ? (this.nextIndex-1)+5: (this.nextIndex-1);
    this.currentIndex = (this.currentIndex-1) < 0 ? (this.currentIndex-1)+5: (this.currentIndex-1);
    this.prevIndex = (this.prevIndex-1)< 0 ? (this.prevIndex-1)+5: (this.prevIndex-1);
    this.prevImg = this._slides[this.prevIndex].img
    this.currentImg = this._slides[this.currentIndex].img
    this.nextImg = this._slides[this.nextIndex].img

  }


swipe(e: any, when: string): void {
    let coord: any;

    coord = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    
    const time = new Date().getTime();

    if (when === 'start') {
        this.swipeCoord = coord;
        this.swipeTime = time;
    } else if (when === 'end') {
        const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
        const duration = time - this.swipeTime;

        if (duration < 1000 //
            && Math.abs(direction[0]) > 30 // Long enough
            && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
            const swipe = direction[0] < 0 ? 'next' : 'previous';
            switch (swipe) {
                case 'previous':
                    this.goBackWard()
                    break;
                case 'next':
                    this.goNext()
                    break;
            }
        }
    }
  }
}
