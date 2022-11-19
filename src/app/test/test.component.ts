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

  buttonClick() {
    this.match = !this.match
  }

  onTextChange(event: Event) {
    this.eventTest = (<HTMLInputElement>event.target).value
  }
}
