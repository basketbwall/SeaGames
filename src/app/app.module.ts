import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CatalogComponent } from './catalog/catalog.component';
import { QuizComponent } from './quiz/quiz.component';
import { GamesComponent } from './games/games.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GamereviewsComponent } from './gamereviews/gamereviews.component';
import { AddGameComponent } from './add-game/add-game.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    CatalogComponent,
    QuizComponent,
    GamesComponent,
    HomepageComponent,
    GamereviewsComponent,
    AddGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
