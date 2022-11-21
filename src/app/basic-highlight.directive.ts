import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
  @HostListener('mouseover') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey')
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey')
  }
}
