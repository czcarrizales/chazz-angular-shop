import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    constructor(private renderer: Renderer2, private elRef: ElementRef){}
    isOpen = false;

    @HostListener('click') onClick(eventData: Event) {
        if (this.isOpen === false) {
            this.renderer.removeClass(this.elRef.nativeElement, 'closed')
            this.renderer.addClass(this.elRef.nativeElement, 'open')
            this.isOpen = true
        } else if (this.isOpen === true) {
            this.renderer.removeClass(this.elRef.nativeElement, 'open')
            this.renderer.addClass(this.elRef.nativeElement, 'closed')
            this.isOpen = false
        }
    }

    ngOnInit() {
        
    }
}