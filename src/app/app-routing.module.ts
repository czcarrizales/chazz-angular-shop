import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SpellsComponent } from './spells/spells.component';

const routes: Routes = [
  {path: '', redirectTo: '/spells', pathMatch: 'full'},
  {path: 'spells', component: SpellsComponent},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
