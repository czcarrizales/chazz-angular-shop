import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Spell } from "../spells/spell.model";

export class SpellService {
    spellSelected = new EventEmitter<Spell>();

    private spells: Spell[] = [
        new Spell('Fireball', 'Fire scorches their faces', 'https://www.pngkit.com/png/detail/942-9426503_fireball-boladefogo-fire-fogo-bola-ball-effect-fireball.png', [new Ingredient('Fire Flower', 1)]),
        new Spell('Lightning Bolt', 'Scar the blood between their veins with volts of electricity', 'https://helios-i.mashable.com/imagery/articles/03bDuXus9Lsnz9sUqURbDiB/hero-image.fill.size_1200x1200.v1643714839.jpg', [new Ingredient('Lightning Lily', 2)])
      ]

      getSpells() {
        return this.spells.slice()
      }
}