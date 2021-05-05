import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecettesComponent } from './recettes/recettes.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { ShowRecetteComponent } from './show-recette/show-recette.component';
import { HttpClient } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { FilterCatPipe } from './filter-cat.pipe';
import { FormsModule } from '@angular/forms';
import { AddRecetteComponent } from './add-recette/add-recette.component';
import { AddCategoryComponent } from './add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    RecettesComponent,
    CategoriesComponent,
    HeaderComponent,
    FilterPipe,
    FilterCatPipe,
    ShowRecetteComponent,
    AddRecetteComponent,
    AddCategoryComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
