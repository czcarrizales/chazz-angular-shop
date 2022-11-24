import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Black Rose Petal', 5),
    new Ingredient('Explosive Powder Pellet', 2),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
}
