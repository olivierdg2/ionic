import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddRecetteComponent } from './add-recette/add-recette.component';
import { CategoriesComponent } from './categories/categories.component';
import { ModifyCategoryComponent } from './modify-category/modify-category.component';
import { ModifyRecetteComponent } from './modify-recette/modify-recette.component';
import { RecettesComponent } from './recettes/recettes.component';
import { ShowRecetteComponent } from './show-recette/show-recette.component';

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
    path: 'recette/:id',
    component: ShowRecetteComponent
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
  },
  {
    path: "recette/modify/:id",
    component: ModifyRecetteComponent
  },
  {
    path: "category/modify/:id",
    component: ModifyCategoryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
