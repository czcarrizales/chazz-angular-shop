import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey')
  }
}
