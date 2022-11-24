import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Black Rose Petal', 5),
    new Ingredient('Explosive Powder Pellet', 2),
  ];

  getIngredients() {
    return this.ingredients.slice()
  }
  addIngredient() {
    
  }
}
