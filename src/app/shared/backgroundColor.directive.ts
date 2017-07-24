import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';


@Directive({
    selector: '[background]'
})

export class BackgroundDirective implements OnInit {
    @Input() background: string;
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.background);
    }
}