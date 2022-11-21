import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostListener('mouseover') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey')
    this.backgroundColor = 'purple'
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = 'red'
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey')
  }
}
