import { Component, OnInit } from '@angular/core';

class Bird {
    y: number;
    delay: number;
    duration: number;
    scale: number;

    constructor(y, delay, duration, scale) {
        this.y = y;
        this.delay = delay;
        this.duration = duration;
        this.scale = scale;
    }
}

@Component({
    selector: 'app-birds',
    template: `
        <div class="birds-wrapper">
            <app-bird
                *ngFor="let bird of birds"
                [y]="bird.y"
                [delay]="bird.delay"
                [duration]="bird.duration"
                [scale]="bird.scale"
            ></app-bird>
        </div>
    `,
    styleUrls: ['./birds.component.scss']
})
export class BirdsComponent implements OnInit {

    birds: Bird[];

    ngOnInit() {
        this.birds = [
            new Bird(80, 1, 8, 0.3),
            new Bird(100, 1.2, 7, 0.5),
            new Bird(120, 2, 15, 0.2)
        ];
    }
}
