import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transition-screen',
  templateUrl: './transition-screen.component.html',
  styleUrls: ['./transition-screen.component.scss']
})
export class TransitionScreenComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.transitionPage()
  }

  transitionPage() {

    
  }

  

}
