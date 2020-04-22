import { Directive, Input, OnInit, ElementRef, HostListener, Renderer2, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective implements OnInit {
  @Input() appInputFormat: string;
  @Input() error: JSON;
  @Input() errorClass: string;
  @Output() updateValue = new EventEmitter();
  currentElement: HTMLInputElement;
  appendedElement: HTMLDivElement;
  appendedElementText: string;
  parentElement: HTMLDivElement;
  appendedChild = false;


  constructor(private eleRef: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit() {
    // console.log(this.appInputFormat);
    // console.log(this.error);
    // console.log(this.errorClass);
    // console.log(this.eleRef.nativeElement);
    this.currentElement = (this.eleRef.nativeElement as HTMLInputElement);
    // this.appendedElement = document.createElement('div'); // native javascript
    this.appendedElement = this.renderer.createElement('div');
    this.appendedElementText = this.renderer.createText('');
    this.parentElement = this.renderer.parentNode(this.currentElement);
    // console.log(this.appendedElement);
    // console.log(this.parentElement);

    this.renderer.setStyle(this.parentElement, 'position', 'relative');
    this.renderer.setStyle(this.appendedElement, 'position', 'absolute');
    this.renderer.setStyle(this.appendedElement, 'background', '#8382fe');
    this.renderer.setStyle(this.appendedElement, 'width', '100%');
    this.renderer.setStyle(this.appendedElement, 'z-index', '999');
    this.renderer.setStyle(this.appendedElement, 'padding', '8px 10px');

  }

  @HostListener('keyup', ['$event']) onKeyup(event: KeyboardEvent) {
    // console.log(this.currentElement.value);
    console.log(event);
    this.appendedElementText = this.formattedValue;
    this.showUpdateValue();
    if (this.appendedElementText === '') {
      this.removeUpdatedElment();
      return;
    } else
      if (event.keyCode === 13) {
        // this.renderer.setProperty(this.currentElement, 'value', this.appendedElementText);
        this.updateValue.emit({
          value: this.appendedElementText
        });
        this.removeUpdatedElment();
        return;
      }

    // console.log(this.formattedValue);
  }

  @HostListener('blur') onBlur() {
    this.renderer.setProperty(this.currentElement, 'value', this.formattedValue);
    this.removeUpdatedElment();
  }


  showUpdateValue() {
    this.appendedChild = true;
    this.renderer.setProperty(this.appendedElement, 'title', 'Formatted value');
    this.renderer.setProperty(this.appendedElement, 'innerHTML', this.appendedElementText);
    this.renderer.appendChild(this.parentElement, this.appendedElement);
    if (this.formattedValue.length <= 2) {
      this.renderer.addClass(this.parentElement, this.errorClass);
    } else {
      this.renderer.removeClass(this.parentElement, this.errorClass);
    }
  }
  removeUpdatedElment() {
    if (this.appendedChild) {
      this.renderer.removeChild(this.parentElement, this.appendedElement);
    }
    this.appendedChild = false;

  }

  get formattedValue() {
    const value = this.currentElement.value.trim();
    if (this.appInputFormat === 'uppercase') {
      return value.toUpperCase();
    } else
      if (this.appInputFormat === 'lowercase') {
        return value.toLowerCase();
      } else {
        return value;
      }
  }

}
