/*
Par: William John Adam Trindade
2021-11-14
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ForfaitCompletComponent } from './components/forfait-complet/forfait-complet.component';
import { ForfaitMiniComponent } from './components/forfait-mini/forfait-mini.component';
import { ForfaitGestionComponent } from './components/forfait-gestion/forfait-gestion.component';
import { ForfaitRechercheComponent } from './components/forfait-recherche/forfait-recherche.component';
import { RatingStarComponent } from './components/rating-star/rating-star.component';

@NgModule({
  declarations: [
    AppComponent,
    ForfaitCompletComponent,
    ForfaitMiniComponent,
    ForfaitGestionComponent,
    ForfaitRechercheComponent,
    RatingStarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [RatingStarComponent],
  providers: [],
  bootstrap: [AppComponent, RatingStarComponent],
})
export class AppModule {}
