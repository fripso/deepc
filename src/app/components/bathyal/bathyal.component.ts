import { Component, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
    selector: "app-bathyal",
    template: `
        <div appCursorMagnet #content class="bathyal">
            The bathyal zone or bathypelagic – from Greek βαθύς (bathýs), deep –
            (also known as midnight zone) is the part of the pelagic zone that
            extends from a depth of 1,000 to 4,000 m (3,300 to 13,100 ft) below the
            ocean surface. It lies between the mesopelagic above, and the
            abyssopelagic below. The average temperature hovers at about 4 °C (39
            °F). Although larger by volume than the photic zone, the bathyal zone is
            less densely populated. Sunlight does not reach this zone, meaning
            primary production, if any, is almost nonexistent. There are no known
            plants because of the lack of sunlight necessary for photosynthesis. It
            is known as the midnight (also twilight or dark) zone because of this
            feature.
        </div>
    `,
    styleUrls: ["./bathyal.component.scss"]
})
export class BathyalComponent implements OnChanges {

    @Input() show: boolean;
    @ViewChild('content') content: ElementRef;

    ngOnChanges(changes) {
        if (changes.show && this.content) {
            changes.show.currentValue ? this.enter() : this.leave();
        }
    }

    enter() {
        gsap.to(this.content.nativeElement, {
            duration: .5,
            opacity: 1,
            ease: 'Power1.easeIn'
        });
    }

    leave() {
        gsap.to(this.content.nativeElement, {
            duration: .5,
            opacity: 0,
            ease: "Power1.easeIn"
        });
    }
}
