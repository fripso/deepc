import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { IndexComponent } from './components/index/index.component';
import { CursorMagnetDirective } from './directives/cursor-magnet.directive';
import { BubbleComponent } from './components/bubble/bubble.component';
import { BirdComponent } from './components/bird/bird.component';
import { BirdsComponent } from './components/birds/birds.component';
import { BubblesComponent } from './components/bubbles/bubbles.component';
import { AbyssComponent } from './components/abyss/abyss.component';
import { BathyalComponent } from './components/bathyal/bathyal.component';
import { MesopelagicComponent } from './components/mesopelagic/mesopelagic.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        IndexComponent,
        CursorMagnetDirective,
        BubbleComponent,
        BirdComponent,
        BirdsComponent,
        BubblesComponent,
        AbyssComponent,
        BathyalComponent,
        MesopelagicComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
