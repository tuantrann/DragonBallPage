import { Component, OnInit } from '@angular/core';
import { filter, fromEvent, map, scan, tap } from 'rxjs';
import { ILevel } from './interface';
@Component({
  selector: 'app-goku-gokupowerup',
  templateUrl: './goku-gokupowerup.component.html',
  styleUrls: ['./goku-gokupowerup.component.scss']
})



export class GokuGokupowerupComponent implements OnInit {

  constructor() { }
  

  $: any;
  sprite: any;
  meter: any;
  meterContainer: any;
  powerLevels: any;
  start: any;
  end: any;
  startM:any;
  endM: any;


  ngOnInit(): void {
    this.start = fromEvent(document, 'keydown');
    this.end = fromEvent(document, 'keyup');
    
    this.start.pipe(
        scan(level => level + 1, 1),
        tap(level => {  
            this.sprite.classList.add('powerup');
            this.fillMeter(level);
        }),
        map(temp => {
            let level: any = temp;
            return this.powerLevels[level];
          
          
        }),
        filter(level => {
          let x: any=level;
          return x && x.next
        })
    )
    .subscribe(({ current, next }) => {
        this.sprite.classList.remove(current);
        this.sprite.classList.add(next);
    });

    this.end.subscribe(() => {
        this.sprite.classList.remove('powerup');
    });
    this.$ =  document.querySelector.bind(document);
    this.sprite = this.$('#sprite');
    this.meter = this.$('#meter');
    this.meterContainer = this.$('#meter-container');
    this.powerLevels = {
    100: {
        current: 'base',
        previous: null,
        next: 'ssj'
    },
    1000: {
        current: 'ssj',
        previous: 'base',
        next: null
    }
  }


    this.startM = fromEvent(document, 'touchmove');
    this.endM = fromEvent(document, 'touchend');
    
    this.startM.pipe(
        scan(level => level + 1, 1),
        tap(level => {  
            this.sprite.classList.add('powerup');
            this.fillMeter(level);
        }),
        map(temp => {
            let level: any = temp;
            return this.powerLevels[level];
          
          
        }),
        filter(level => {
          let x: any=level;
          return x && x.next
        })
    )
    .subscribe(({ current, next }) => {
        this.sprite.classList.remove(current);
        this.sprite.classList.add(next);
    });

    this.endM.subscribe(() => {
        this.sprite.classList.remove('powerup');
    });

  }

    fillMeter (level:any) {
    const limit = 100;

    if(level >= limit) {
        return;
    }

    const containerWidth = this.meterContainer.offsetWidth;
    const newWidth = (level/limit) * containerWidth;

    this.meter.style.width = `${newWidth}px`;
}

}
