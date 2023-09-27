import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  @Input() set appCustom(formValid: boolean) {
    if (formValid) {
      this.elRef.nativeElement.style.backgroundColor = 'green';
    } else {
      this.elRef.nativeElement.style.backgroundColor = 'red';
    }
  }
  
}
