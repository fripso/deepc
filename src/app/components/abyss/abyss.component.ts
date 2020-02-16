import { Component, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import { gsap } from 'gsap';

@Component({
    selector: 'app-abyss',
    template: `
        <div appCursorMagnet
         #content class="abyss">
            The abyssal zone or abyssopelagic zone is a layer of the pelagic
            zone of the ocean. "Abyss" derives from the Greek word ἄβυσσος,
            meaning bottomless. At depths of 3,000 to 6,000 metres (9,800 to
            19,700 ft), this zone remains in perpetual darkness. It alone makes
            up over 83% of the ocean and covers 60% of the Earth. The abyssal
            zone has temperatures around 2 to 3 °C (36 to 37 °F) through the
            large majority of its mass. Due to there being no light, there are
            no plants producing oxygen, which primarily comes from ice that had
            melted long ago from the polar regions. The water along the seafloor
            of this zone is actually devoid of oxygen, resulting in a death trap
            for organisms unable to quickly return to the oxygen-enriched water
            above. This region also contains a much higher concentration of
            nutrient salts, like nitrogen, phosphorus, and silica, due to the
            large amount of dead organic material that drifts down from the
            above ocean zones and decomposes.
        </div>
    `,
    styleUrls: ['./abyss.component.scss']
})
export class AbyssComponent implements OnChanges {

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
