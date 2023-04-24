import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AjoutFicheComponent } from './ajout-fiche/ajout-fiche.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FicheComponent } from './fiche/fiche.component';
import { NoteBanqueComponent } from './note-banque/note-banque.component';
import { NoteCallcenterComponent } from './note-callcenter/note-callcenter.component';
import { NoteAvocatComponent } from './note-avocat/note-avocat.component';
import { NoteAgentComponent } from './note-agent/note-agent.component';
import { NoteHuissierComponent } from './note-huissier/note-huissier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AjoutFicheComponent,
    InscriptionComponent,
    FicheComponent,
    NoteBanqueComponent,
    NoteCallcenterComponent,
    NoteAvocatComponent,
    NoteAgentComponent,
    NoteHuissierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
