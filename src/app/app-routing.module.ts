import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteBanqueComponent } from './note-banque/note-banque.component';
import { NoteCallcenterComponent } from './note-callcenter/note-callcenter.component';
import { NoteAgentComponent } from './note-agent/note-agent.component';
import { NoteAvocatComponent } from './note-avocat/note-avocat.component';
import { NoteHuissierComponent } from './note-huissier/note-huissier.component';
import { FicheComponent } from './fiche/fiche.component';

const routes: Routes = [
  {path: '', component: FicheComponent},
{path: 'callcenter', component: NoteCallcenterComponent},
{path: 'agent', component: NoteAgentComponent},
{path: 'avocat', component:NoteAvocatComponent},
{path: 'huissier', component:NoteHuissierComponent},
{path: 'banque', component: NoteBanqueComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
