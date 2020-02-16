import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollService } from '@services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

    @Output() scrollTo = new EventEmitter<number>();

    @ViewChild('navshape') navShape: ElementRef;
    @ViewChild('burgershape') burgerShape: ElementRef;
    @ViewChild('logo') logo: ElementRef;

    ss: Subscription[] = [];
    hidden = false;
    lightsOn: boolean;

    showMenu: () => void;

    constructor(public scroll: ScrollService) {}

    ngOnInit(): void {
        this.ss.push(
            this.scroll.getScrollDirection()
                .subscribe(b => b ? ((this.hidden = false), this.showNav()) : (this.hidden = true, this.hideNav())),
            this.scroll.getScrollY()
                .subscribe(y => this.lightsOn = (y > 7500) ? true : false)
        );
    }

    ngOnDestroy(): void {
        this.ss.forEach(s => s.unsubscribe());
    }

    private showNav() {
        this.showShape();
        this.hideBurger();
        this.growLogo();
    }

    private hideNav() {
        this.hideShape();
        this.showBurger();
        this.shrinkLogo();
    }

    private showShape() {
        gsap.to(
            this.navShape.nativeElement,
            { y: 0, duration: 0.3, ease: 'Power1.easeOut' }
        );
    }

    private hideShape() {
        gsap.to(this.navShape.nativeElement, {
            duration: 0.3,
            y: -104,
            ease: 'Power1.easeOut'
        });
    }

    private showBurger() {
        gsap.to(this.burgerShape.nativeElement, {
            duration: 0.2,
            right: 0,
            ease: 'Power1.easeOut'
        });
    }

    private hideBurger() {
        gsap.to(this.burgerShape.nativeElement, {
            duration: 0.2,
            right: -100,
            ease: 'Power1.easeOut'
        });
    }

    private shrinkLogo() {
        gsap.to(this.logo.nativeElement, {
            duration: 0.2,
            width: 64,
            y: -10,
            ease: 'Power1.easeOut'
        });
    }

    private growLogo() {
        gsap.to(this.logo.nativeElement, {
            duration: 0.2,
            width: 128,
            y: 0,
            ease: 'Power1.easeOut'
        });
    }
}
