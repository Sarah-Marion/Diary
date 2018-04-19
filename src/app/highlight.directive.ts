import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.color = '#7700FD';
    this.elem.nativeElement.style.fontSize = '20px'; 
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
