import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SpellService } from 'src/app/services/spell.service';
import { Spell } from '../spell.model';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {

  spells!: Spell[];

  parentGift = 'Baseball gifted by the parent'

  constructor(private spellService: SpellService) { }

  ngOnInit(): void {
    this.spells = this.spellService.getSpells()
  }

  parentCaughtChildBall(caughtItem: string) {
    alert('i caught the ' + caughtItem)
  }

}
