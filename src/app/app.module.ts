import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/ui/button/button.component';
import { TrainerCardComponent } from './components/cards/trainer-card/trainer-card.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SearchBarComponent } from './components/layout/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TrainerCardComponent,
    HeaderComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule, 
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
