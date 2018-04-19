import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'red'; 
  }

//   @HostListener('mouseenter') onMouseEnter(){
//     this.highlight('red')
//   }
//   @HostListener('mouseleave') onmouseleave(){
//     this.highlight(null)
//   }
// private highlight (color: string){
// }

}
