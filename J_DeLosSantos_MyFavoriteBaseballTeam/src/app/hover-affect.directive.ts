import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @Input() affectStyle: 'underline' | 'bold' ='underline';
  @HostBinding('style.textDecoration') textDecoration: string = "";
  @HostBinding('style.fontWeight') fontWeight: string = "";
  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.affectStyle === 'underline') this.textDecoration = 'underline'; 
    else this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.affectStyle === 'underline') this.textDecoration = 'none';
    else this.fontWeight = 'normal';
  }
}
