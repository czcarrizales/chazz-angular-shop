import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpellService } from '../services/spell.service';
import { Spell } from './spell.model';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss'],
  providers: [SpellService]
})
export class SpellsComponent implements OnInit {

  @Input() inputTest!: string;
  @Input() hiddenEgg!: string;
  spellItemForSpellDetail!: Spell;
  @Output() newFireworkEvent = new EventEmitter<string>();
  selectedSpell!: Spell;

  constructor(private spellService: SpellService) { }

  ngOnInit(): void {
    this.spellService.spellSelected.subscribe((spell: Spell) => {
      this.selectedSpell = spell
    })
  }

  displayFirework(value: string) {
    this.newFireworkEvent.emit(value)
  }

}
