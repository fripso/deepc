import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, fromEvent, Subject, Observable, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, mapTo } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})

export class ScrollService implements OnDestroy {
    private s: Subscription;
    private readonly menuShown = new Subject<boolean>();
    private readonly scrollY = new Subject<number>();
    private previousY;

    constructor() {
        this.s = fromEvent(window, 'scroll')
            .pipe(debounceTime(25))
            .subscribe(() => {
                this.scrollY.next(window.pageYOffset || window.scrollY);
                this.toggleMenu();
            });
    }

    ngOnDestroy() {
        this.s.unsubscribe();
    }

    getScrollDirection(): Observable<boolean> {
        return this.menuShown.asObservable().pipe(distinctUntilChanged());
    }

    getScrollY(): Observable<number> {
        return this.scrollY.asObservable();
    }

    getScrollState(): Observable<boolean> {
        const slow = this.scrollY.pipe(debounceTime(50), mapTo(false));
        return merge(this.scrollY.asObservable().pipe(mapTo(true)), slow).pipe(distinctUntilChanged());
    }

    showMenu() {
        this.menuShown.next(true);
    }

    private toggleMenu = (): void => {
        const y = window.pageYOffset || window.scrollY;
        const bannerHeight = window.innerWidth / (16 / 9);

        if (this.isScrollDown(y)) {
            if (y >= bannerHeight - 128) {
                this.menuShown.next(false);
            }
        } else {
            this.menuShown.next(true);
        }
    }

    private isScrollDown(y): boolean {
        const down = y > this.previousY ? true : false;
        this.previousY = y <= 0 ? 0 : y;
        return down;
    }
}
