import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SpellDetailComponent } from './spells/spell-detail/spell-detail.component';
import { SpellEditComponent } from './spells/spell-edit/spell-edit.component';
import { SpellStartComponent } from './spells/spell-start/spell-start.component';
import { SpellsComponent } from './spells/spells.component';

const routes: Routes = [
  { path: '', redirectTo: '/spells', pathMatch: 'full' },
  {
    path: 'spells',
    component: SpellsComponent,
    children: [
      { path: '', component: SpellStartComponent },
      {path: 'new', component: SpellEditComponent},
      {path: ':id', component: SpellDetailComponent},
      {path: ':id/edit', component: SpellEditComponent}
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
