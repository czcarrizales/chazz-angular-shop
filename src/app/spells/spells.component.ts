import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Spell } from './spell.model';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {

  @Input() inputTest!: string;
  @Input() hiddenEgg!: string;
  spellItemForSpellDetail!: Spell;
  @Output() newFireworkEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  spellsGettingSpellItem(spellItem: Spell) {
    alert('spells component got  ' + spellItem.name)
    this.spellItemForSpellDetail = spellItem
  }

  displayFirework(value: string) {
    this.newFireworkEvent.emit(value)
  }

}
