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

  buttonClick() {
    this.match = !this.match
  }
}
