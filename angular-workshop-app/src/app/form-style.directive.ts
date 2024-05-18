
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormStyle]',
  standalone: true
})
export class FormStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'max-width', '600px');
    this.renderer.setStyle(this.el.nativeElement, 'margin', '0 auto');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '20px');
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #ccc');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#f9f9f9');
  }
}

