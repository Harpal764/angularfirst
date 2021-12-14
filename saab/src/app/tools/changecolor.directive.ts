import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private _ele:ElementRef,
    private _ren:Renderer2)
     {
       _ren.setStyle(_ele.nativeElement,
        "background","orange");
        _ren.setStyle(_ele.nativeElement,
          "color","white");
          _ren.setStyle(_ele.nativeElement,
            "border","1px solid red");
      }


}
