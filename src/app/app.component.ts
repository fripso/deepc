import { Component } from '@angular/core';

@Component({
    selector: "app-root",
    template: `
        <div class="main">
            <app-menu (scrollTo)="scrollPage($event)"></app-menu>
            <app-index></app-index>
        </div>
    `,
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    scrollPage(y) {
        window.scrollTo(0, y);
    }
}
