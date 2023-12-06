import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundVideoComponent } from './Componentes/BackgroundVideo/background.video.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundVideoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
