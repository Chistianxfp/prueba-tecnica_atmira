import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DaysPreviewComponent } from './views/days-preview/days-preview.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { fromRoot } from './store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DayPostComponent } from './views/day-post/day-post.component';

@NgModule({
  declarations: [
    AppComponent,
    DaysPreviewComponent,
    DayPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Inicializamos Store con los reducer
    StoreModule.forRoot({nasaDailyState: fromRoot.NasaDailyReducer}),
    //Inicializamos los effects
    EffectsModule.forRoot([fromRoot.NasaDailyEffects]),
    BrowserAnimationsModule,

    //Elementos de diseño
    MatButtonModule,
    MatIconModule,
    NgxSkeletonLoaderModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
