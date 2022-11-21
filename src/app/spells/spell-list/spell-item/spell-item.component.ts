import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Spell } from '../../spell.model';

@Component({
  selector: 'app-spell-item',
  templateUrl: './spell-item.component.html',
  styleUrls: ['./spell-item.component.scss']
})
export class SpellItemComponent implements OnInit {
  @Input() spell!: Spell;
  @Input() childStorage!: string;
  @Output() childThrowingBallEvent = new EventEmitter<string>();
  ball = 'football'

  constructor() { }

  ngOnInit(): void {
  }

  throwBall() {
    alert('Hey, parent! I am your child, and I am throwing a ' + this.ball)
    this.childThrowingBallEvent.emit(this.ball)
  }

}
