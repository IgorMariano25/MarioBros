import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundVideoComponent } from './Componentes/BackgroundVideo/background.video.component';
import { ButtonComponent } from './Componentes/Button/button.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { MainComponent } from './Componentes/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundVideoComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
