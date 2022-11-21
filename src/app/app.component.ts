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

  oddNumbers: number[]= []
  evenNumbers: number[]= []

  loadedFeature = 'spell'

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  addOddOrEven(oddOrEven: number) {
    if (oddOrEven % 2 === 0) {
      this.evenNumbers.push(oddOrEven)
    } else if (oddOrEven % 2 === 1) {
      this.oddNumbers.push(oddOrEven)
    }
    console.log(oddOrEven)
  }

  addFirework(newFireworkEvent: string) {
    this.fireworks.push(newFireworkEvent)
  }
}
