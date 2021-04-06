import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CatalogComponent } from './catalog/catalog.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: 'aboutus', component: AboutusComponent },
  { path: 'catalog', component: CatalogComponent },
  {path: 'quiz', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutusComponent, AppComponent];
