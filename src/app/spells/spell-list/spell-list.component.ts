import { Component, OnInit } from '@angular/core';
import { Spell } from '../spell.model';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {

  spells: Spell[] = [
    new Spell('Fireball', 'Fire scorches their faces', '#')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
