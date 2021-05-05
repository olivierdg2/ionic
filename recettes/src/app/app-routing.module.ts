import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddRecetteComponent } from './add-recette/add-recette.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecettesComponent } from './recettes/recettes.component';

const routes: Routes = [

  {
    path: 'home',
    redirectTo: 'recettes',
    pathMatch: 'full'
  },
  {
    path: 'recettes',
    component: RecettesComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: "add-recette",
    component: AddRecetteComponent
  },
  {
    path: "add-category",
    component: AddCategoryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
