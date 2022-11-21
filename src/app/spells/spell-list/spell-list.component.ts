import { Component, OnInit } from '@angular/core';
import { Spell } from '../spell.model';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {

  spells: Spell[] = [
    new Spell('Fireball', 'Fire scorches their faces', 'https://www.pngkit.com/png/detail/942-9426503_fireball-boladefogo-fire-fogo-bola-ball-effect-fireball.png')
  ]

  parentGift = 'Baseball'

  constructor() { }

  ngOnInit(): void {
  }

}
