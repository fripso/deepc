import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { ScrollService } from '@services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit, OnDestroy {

    s: Subscription[] = [];
    scrollState = false;
    y: number;

    constructor(private scroll: ScrollService) {}

    ngAfterViewInit(): void {
        this.s.push(
            this.scroll.getScrollState().subscribe(b => (this.scrollState = b)),
            this.scroll.getScrollY().subscribe(y => (this.y = y))
        );
    }

    ngOnDestroy(): void {
        this.s.forEach(s => s.unsubscribe());
    }
}
