import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private igChangeSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    interval(1000).subscribe(count => {
      console.log(count)
    })
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
