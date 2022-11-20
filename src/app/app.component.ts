import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chazz-angular-shop';
  testSpells = ['hello', 'goodbye']
  parentEgg = 'Spiked Dragon Egg'
  fireworks = ['rainbow', 'dark and cloudy']

  addFirework(newFireworkEvent: string) {
    this.fireworks.push(newFireworkEvent)
  }
}
