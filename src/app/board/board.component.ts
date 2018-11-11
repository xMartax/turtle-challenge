import { Component, Input } from '@angular/core';

import { Cell } from '../cell/cell';
import { TurtleChallenge } from '../boardDimensions/turtlechallenge';


@Component({
  selector: 'board',
  templateUrl: './board.component.html'
})
export class BoardComponent {
  @Input() game: TurtleChallenge;

  constructor() { }

  clickCell(row: number, column: number) {
    this.game.processBeaten({ row, column });
  }

  markCell(row: number, column: number) {
    this.game.processMark({ row, column });
  }
}
