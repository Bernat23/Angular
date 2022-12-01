import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaComponent } from './projecte/Components/Carta/carta/carta.component';
import { BarallaComponent } from './projecte/Components/Baralla/baralla/baralla.component';
import { MemoriComponent } from './projecte/Components/Memori/memori/memori.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    BarallaComponent,
    MemoriComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
