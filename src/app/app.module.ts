import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CongeComponent } from './conge/conge.component';
import { AchatComponent } from './achat/achat.component';
import { OrdreComponent } from './ordre/ordre.component';
import { ValidationAchatComponent } from './validation-achat/validation-achat.component';
import { ValidationOrdreComponent } from './validation-ordre/validation-ordre.component';
import { ValidationCongeComponent } from './validation-conge/validation-conge.component';

@NgModule({
  declarations: [
    AppComponent,
    CongeComponent,
    AchatComponent,
    OrdreComponent,
    ValidationAchatComponent,
    ValidationOrdreComponent,
    ValidationCongeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
