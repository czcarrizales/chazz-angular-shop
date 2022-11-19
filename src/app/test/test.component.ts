import { Component } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  name = 'Chazz'
  match = false
  title = 'Property Binding Test'
  eventTest = ''
  changingText = ''
  username = ''
  canBeSeen = false;

  getColor() {
    return this.canBeSeen ? 'red' : 'green'
  }

  look() {
    this.canBeSeen = !this.canBeSeen
  }

  buttonClick() {
    this.match = !this.match
  }

  resetName() {
    this.username = ''
  }

  onTextChange(event: Event) {
    this.eventTest = (<HTMLInputElement>event.target).value
  }
}
