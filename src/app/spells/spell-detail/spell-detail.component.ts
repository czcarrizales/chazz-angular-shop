import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { SpellService } from 'src/app/services/spell.service';
import { Spell } from '../spell.model';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.scss'],
})
export class SpellDetailComponent implements OnInit {
  spellById!: Spell;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private spellService: SpellService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let id = Number(paramMap.get('id'))
      this.spellById = this.spellService.getSpellById(id)
    })
  }

  addToShoppingList() {
    this.spellById.ingredients.map((ingredient) => {
      this.shoppingListService.sendIngredientsToShoppingList(ingredient);
    });
  }

}
