import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Black Rose Petal', 5),
    new Ingredient('Explosive Powder Pellet', 2),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
  sendIngredientsToShoppingList(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
