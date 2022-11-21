import { Component, Input, OnInit } from '@angular/core';
import { Spell } from '../spell.model';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.scss']
})
export class SpellDetailComponent implements OnInit {

  @Input() spellPocket!: Spell;

  constructor() { }

  ngOnInit(): void {
  }

}
