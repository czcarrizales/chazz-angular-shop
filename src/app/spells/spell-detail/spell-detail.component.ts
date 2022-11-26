import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Spell } from '../spell.model';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.scss']
})
export class SpellDetailComponent implements OnInit {

  @Input() spellPocket!: Spell;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addToShoppingList() {
    this.spellPocket.ingredients.map((ingredient) => {
      this.shoppingListService.sendIngredientsToShoppingList(ingredient)
    })
  }

}
