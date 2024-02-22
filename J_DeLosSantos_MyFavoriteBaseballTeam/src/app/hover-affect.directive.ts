import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @Input() affectStyle: 'underline' | 'bold' | 'border' ='underline';
  @HostBinding('style.textDecoration') textDecoration: string = "";
  @HostBinding('style.fontWeight') fontWeight: string = "";
  @HostBinding('style.border') border: string = "'";
  private originalBorder: string = "";
  
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.affectStyle === 'underline') this.textDecoration = 'underline'; 
    else if (this.affectStyle === 'border') {
      this.originalBorder = window.getComputedStyle(this.el.nativeElement).border;
      this.setBorder('2px solid red'); 
    }
    else this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.affectStyle === 'underline') this.textDecoration = 'none';
    else if(this.affectStyle === 'border'){
      this.setBorder(this.originalBorder);
    }
    else this.fontWeight = 'normal';
  }

  private setBorder(value: string) {
    this.border = value;
  }
}
