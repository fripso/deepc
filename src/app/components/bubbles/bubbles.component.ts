import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: "app-bubbles",
    template: `
        <app-bubble *ngFor="let bubble of bubbles" [scroll]="scrollState" [y]="y"></app-bubble>
    `
})
export class BubblesComponent implements OnInit {

    @Input() count: number;
    @Input() y: number;
    @Input() scrollState: boolean;

    bubbles: number[];

    constructor() {}

    ngOnInit(): void {
        this.bubbles = Array.from(Array(this.count), (x, i) => i);
    }
}
