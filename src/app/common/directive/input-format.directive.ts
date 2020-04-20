import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective implements OnInit {
  @Input() appInputFormat: string;
  @Input() error: JSON;
  @Input() errorClass: string;
  currentElement: HTMLInputElement;


  constructor(private eleRef: ElementRef) {

  }
  ngOnInit() {
    // console.log(this.appInputFormat);
    // console.log(this.error);
    // console.log(this.errorClass);
    // console.log(this.eleRef.nativeElement);
    this.currentElement = (this.eleRef.nativeElement as HTMLInputElement);
  }

  @HostListener('keyup') onKeyup() {
    // console.log(this.currentElement.value);
    console.log(this.formattedValue);
  }

  get formattedValue() {
    if (this.appInputFormat === 'uppercase') {
      return this.currentElement.value.toUpperCase();
    } else
      if (this.appInputFormat === 'lowercase') {
        return this.currentElement.value.toLowerCase();
      } else {
        return this.currentElement.value;
      }
  }

}
