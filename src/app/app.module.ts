import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import { MarcadorService } from './marcador.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MapaComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [MarcadorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
