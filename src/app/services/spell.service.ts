import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { Spell } from "../spells/spell.model";

export class SpellService {
    spellSelected = new Subject<Spell>();

    private spells: Spell[] = [
        new Spell(1, 'Fireball', 'Fire scorches their faces', 'https://www.pngkit.com/png/detail/942-9426503_fireball-boladefogo-fire-fogo-bola-ball-effect-fireball.png', [new Ingredient('Fire Flower', 1)]),
        new Spell(2, 'Lightning Bolt', 'Scar the blood between their veins with volts of electricity', 'https://helios-i.mashable.com/imagery/articles/03bDuXus9Lsnz9sUqURbDiB/hero-image.fill.size_1200x1200.v1643714839.jpg', [new Ingredient('Lightning Lily', 2), new Ingredient ('Old Volt Rod', 6)]),
        new Spell(3, 'Pure Nothing Orb', 'Well, they were not kidding when they said it was a bunch of nothing.', 'https://riloh.imgix.net/pub/media/catalog/product/c/l/clear-orb.jpg?auto=format&q=75&w=1060&auto=format', [new Ingredient('Broken Soul', 1), new Ingredient ('Binding Scroll', 1)])
      ]

      getSpells() {
        return this.spells.slice()
      }

      getSpellById(id: number) {
        return this.spells[id - 1]
      }
}