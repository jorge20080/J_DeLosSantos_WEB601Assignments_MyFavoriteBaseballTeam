import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @HostBinding('style.textDecoration') textDecoration: string = "";

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.textDecoration = 'underline';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textDecoration = 'none';
  }
}
