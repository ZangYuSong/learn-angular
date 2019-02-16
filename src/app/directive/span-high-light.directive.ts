import { Directive, ElementRef, Input, HostListener, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appSpanHighLight]'
})
export class SpanHighLightDirective implements OnInit {
  @Input('appSpanHighLight') color: string

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    // this.el.nativeElement.style.color = this.color || 'green'
    this.render.setStyle(this.el.nativeElement, 'color', this.color || 'green')
  }

  @HostListener('click') click() {
    alert(this.color)
  }
}
