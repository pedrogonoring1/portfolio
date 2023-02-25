import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IntroducaoComponent } from './introducao/pages/introducao/introducao.component';
import { SobreComponent } from './sobre/pages/sobre/sobre.component';
import { ProjetosComponent } from './projetos/pages/projetos/projetos.component';
import { ContatoComponent } from './contato/pages/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroducaoComponent,
    SobreComponent,
    ProjetosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
