import { Component, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
    selector: 'app-mesopelagic',
    template: `
        <div appCursorMagnet #content class="mesopelagic">
            The mesopelagic zone (Greek μέσον, middle), also known as the middle
            pelagic or twilight zone, is the part of the pelagic zone that lies
            between the photic epipelagic and the aphotic bathypelagic zones.
            It is defined by light, and begins at the depth where only 1% of
            incident light reaches and ends where there is no light; the depths
            of this zone are between approximately 200 to 1000 meters (~660 to
            3300 feet) below the ocean surface. It hosts a diverse biological
            community that includes bristlemouths, blobfish, bioluminescent
            jellyfish, giant squid, and a myriad of other unique organisms
            adapted to live in a low-light environment. It has long
            captivated the imagination of scientists, artists and writers; deep
            sea creatures are prominent in popular culture, particularly as
            horror movie villains.
        </div>
    `,
    styleUrls: ['./mesopelagic.component.scss']
})
export class MesopelagicComponent implements OnChanges {

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
