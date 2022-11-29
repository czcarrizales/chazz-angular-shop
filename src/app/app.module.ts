import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SpellsComponent } from './spells/spells.component';
import { SpellListComponent } from './spells/spell-list/spell-list.component';
import { SpellDetailComponent } from './spells/spell-detail/spell-detail.component';
import { SpellItemComponent } from './spells/spell-list/spell-item/spell-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './gamecontrol/odd/odd.component';
import { EvenComponent } from './gamecontrol/even/even.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './services/shopping-list.service';
import { SpellStartComponent } from './spells/spell-start/spell-start.component';
import { SpellEditComponent } from './spells/spell-edit/spell-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpellsComponent,
    SpellListComponent,
    SpellDetailComponent,
    SpellItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    DropdownDirective,
    SpellStartComponent,
    SpellEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
