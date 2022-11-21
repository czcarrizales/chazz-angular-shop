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

  constructor() { }

  ngOnInit(): void {
  }

  throwBall() {
    this.childThrowingBallEvent.emit('football')
  }

}
