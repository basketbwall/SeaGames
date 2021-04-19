import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CatalogComponent } from './catalog/catalog.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GamereviewsComponent } from './gamereviews/gamereviews.component';
import { AddGameComponent } from './add-game/add-game.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { SellingpointsComponent } from './sellingpoints/sellingpoints.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    CatalogComponent,
    QuizComponent,
    HomepageComponent,
    GamereviewsComponent,
    AddGameComponent,
    AddReviewComponent,
    SellingpointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
