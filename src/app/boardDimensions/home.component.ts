import { Component, OnInit } from '@angular/core';
import { TurtleChallenge } from './turtlechallenge';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class homeComponent implements OnInit {
  game: TurtleChallenge;

  constructor() { }

  ngOnInit() {
    this.game = TurtleChallenge.newBeginersGame();
  }

  restart() {
    this.game = TurtleChallenge.newBeginersGame();
  }
}
