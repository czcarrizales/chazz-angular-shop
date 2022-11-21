import { Component, Input, OnInit } from '@angular/core';
import { Spell } from '../../spell.model';

@Component({
  selector: 'app-spell-item',
  templateUrl: './spell-item.component.html',
  styleUrls: ['./spell-item.component.scss']
})
export class SpellItemComponent implements OnInit {
  @Input() spell!: Spell;
  @Input() childStorage!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
