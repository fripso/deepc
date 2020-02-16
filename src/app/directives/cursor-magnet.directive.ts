import { Directive, ElementRef, HostListener, Input} from '@angular/core';
import { gsap } from 'gsap';

@Directive({
    selector: '[appCursorMagnet]'
})
export class CursorMagnetDirective {

    @Input() duration = 0.5;
    @Input() amplitude = 100;

    constructor(private el: ElementRef) {}

    @HostListener('mousemove', ['$event']) onMouseMove(e) {
        this.magnetize(e);
    }

    @HostListener('mouseleave') onMouseLeave() {
        gsap.to(this.el.nativeElement, { duration: this.duration, x: 0, y: 0 });
    }

    magnetize(e) {
        this.magnetizeOne(e, this.el.nativeElement, this.amplitude);
    }

    magnetizeOne(event: MouseEvent, target: HTMLElement, movement) {
        const boundingRect = this.el.nativeElement.getBoundingClientRect();
        const relX = event.clientX - boundingRect.left;
        const relY = event.clientY - boundingRect.top;
        const x = ((relX - boundingRect.width / 2) / boundingRect.width) * movement;
        const y = ((relY - boundingRect.height / 2) / boundingRect.height) * movement;
        gsap.to(target, {
            duration: this.duration,
            x,
            y,
            force3D: false,
            ease: 'Power1.easeOut'
        });
    }
}
