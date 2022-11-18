import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `<p>Testing writing html in a template instead of a url.</p>`,
  styles: [`
  p {
    color: red;
  }
  `]
  // styleUrls: ['./test.component.scss']
})
export class TestComponent {
  
}
