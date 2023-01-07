import { Component, ElementRef, EventEmitter, Output, ViewChild,  AfterViewInit } from '@angular/core';
import { fromEvent,distinctUntilChanged } from 'rxjs';
import { debounceTime, pluck } from 'rxjs/operators';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements  AfterViewInit {
  @ViewChild('input') inputElement!: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
    ngAfterViewInit() {
      if (this.inputElement) {
        fromEvent(this.inputElement.nativeElement, 'keyup')
          .pipe(
              debounceTime(500),
              pluck('target', 'value'),
              distinctUntilChanged(),
          )
          .subscribe(
          value => { this.search.emit(this.inputElement.nativeElement.value)}
        )
      }
    } 
}