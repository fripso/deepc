import { Component, OnChanges, Input, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { gsap } from 'gsap';
import { randomInt } from '@utilities/numbers';

@Component({
    selector: 'app-bubble',
    template: `<div #bubble class="bubble" [ngClass]="{'light': y > 7500}"></div>`,
    styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements AfterViewInit, OnChanges {
    @Input() y: number;
    @Input() scroll: number;

    bubbleOffsetY = 2500;
    bubbleY: number;
    size: number;
    delay: number;

    @ViewChild('bubble') bubble: ElementRef;

    constructor(private renderer: Renderer2) {}

    ngAfterViewInit() {
        this.bubbleY = randomInt(window.innerHeight) - this.bubbleOffsetY;
        this.delay = Math.random() * 5;
        this.size = randomInt(10);
        const x = 10 + randomInt(80);
        this.styleBubble(x, this.bubbleY, this.size, this.delay);
    }

    ngOnChanges(changes) {
        if (this.bubble) {
            if (changes.scroll && changes.scroll.currentValue === false) {
                if (this.y > 3000 && this.y < 12500) {
                    this.moveBubble(this.y);
                }
            }
        }
    }

    moveBubble(y) {
        gsap.to(this.bubble.nativeElement, {
            duration: 1.5,
            delay: this.delay / 100,
            top: y + this.bubbleY + this.bubbleOffsetY,
            ease: `elastic.out(${this.size / 200}, 0.3)`
        });
    }

    styleBubble(x, y, size, delay) {
        this.renderer.setStyle(this.bubble.nativeElement, 'left', `${x}%`);
        this.renderer.setStyle(this.bubble.nativeElement, 'top', `${y}px`);
        this.renderer.setStyle(this.bubble.nativeElement, 'height', `${size}px`);
        this.renderer.setStyle(this.bubble.nativeElement, 'width', `${size}px`);
        this.renderer.setStyle(this.bubble.nativeElement, 'animation',
            `updown ease -in -out 5s infinite alternate, leftright ease -in -out' ${delay}s infinite alternate`),
            this.renderer.setStyle(this.bubble.nativeElement, 'animation-delay', `${(delay / 5)}s`);
    }
}
