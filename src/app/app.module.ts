import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { StatsComponent } from './stats/stats.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { SpellsComponent } from './spells/spells.component';
import { CantripsComponent } from './cantrips/cantrips.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    StatsComponent,
    EquipmentComponent,
    SpellsComponent,
    CantripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
