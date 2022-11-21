import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Spell } from '../spell.model';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {

  spells: Spell[] = [
    new Spell('Fireball', 'Fire scorches their faces', 'https://www.pngkit.com/png/detail/942-9426503_fireball-boladefogo-fire-fogo-bola-ball-effect-fireball.png'),
    new Spell('Lightning Bolt', 'Scar the blood between their veins with volts of electricity', 'https://helios-i.mashable.com/imagery/articles/03bDuXus9Lsnz9sUqURbDiB/hero-image.fill.size_1200x1200.v1643714839.jpg')
  ]

  parentGift = 'Baseball gifted by the parent'
  @Output() spellItemToSpellEvent = new EventEmitter<Spell>()

  constructor() { }

  ngOnInit(): void {
  }

  spellListGettingSpellItem(spellItem: Spell) {
    alert('spell list caught the ' + spellItem.name)
    this.spellItemToSpellEvent.emit(spellItem)
  }

  parentCaughtChildBall(caughtItem: string) {
    alert('i caught the ' + caughtItem)
  }

}
