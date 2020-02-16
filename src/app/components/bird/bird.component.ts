import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, Input } from '@angular/core';
import { gsap } from 'gsap';

@Component({
    selector: "app-bird",
    template: `
        <div appCursorMagnet #bird class="bird-container">
            <div class="bird"></div>
        </div>
    `,
    styleUrls: ["./bird.component.scss"]
})
export class BirdComponent implements AfterViewInit {

    @Input() y: number;
    @Input() delay: number;
    @Input() duration: number;
    @Input() scale: number;

    @ViewChild("bird") bird: ElementRef;

    constructor(private renderer: Renderer2) {}

    ngAfterViewInit(): void {
        this.renderer.setStyle(this.bird.nativeElement, 'transform', `scale(${(this.scale * -1), this.scale})`);
        this.renderer.setStyle(this.bird.nativeElement, 'top', `${this.y}px`);
        this.birdFly(this.delay, this.duration);
    }

    birdFly(delay, duration) {
        gsap.to(this.bird.nativeElement, {
            duration,
            left: -200,
            ease: "none",
            delay
        });
    }
}
