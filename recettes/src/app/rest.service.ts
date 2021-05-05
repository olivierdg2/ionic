import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {catchError, retry} from "rxjs/internal/operators";
import {Observable, throwError} from "rxjs";
import { HttpClient } from '@angular/common/http';

const endpoint = "http://localhost:8000/api/";

export interface Recette {
  id: number;
  name: string;
  category: Recette_Category;
  createdAt: Date;
  Ingredients: Ingredient[];
  Preparation: Step[];
  image: string;
}

export interface Recette_Category {
  id: number;
  name: string;
}

export interface Ingredient {
  Ingredient: string;
  Quantity: string;
}

export interface Step {
  Step: string;
}

export interface add_Recette {
  Name: string;
  Category: number;
  Ingredients: Ingredient[];
  Preparation: Step[];
  Image: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface add_Category {
  Name: string;
  Description: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  getRecettes(): Observable<any> {
    return this.http.get<Recette>(endpoint + "recettes");
  }

  getRecette(id: number): Observable<any> {
    return this.http.get<Recette>(endpoint + "recette/" + id);
  }

  addRecette(recette: add_Recette): Observable<any>{
    return this.http.post(endpoint + "recettes", recette)
  }

  modifyRecette(recette: Recette): Observable<any>{
    return this.http.put(endpoint + "recette/" + recette.id, recette)
  }

  deleteRecette(id: Number): Observable<void>{
    return this.http.delete<void>(endpoint + "recettes/" + id)
  }

  getCategories(): Observable<any> {
    console.log("ok");
    return this.http.get<Category>(endpoint + "categories");
  }

  getCategory(id: number): Observable<any> {
    return this.http.get<Category>(endpoint + "category/" + id);
  }

  addCategory(category: add_Category): Observable<any>{
    return this.http.post(endpoint + "categories", category)
  }

  modifyCategory(category: Category): Observable<any>{
    return this.http.put(endpoint + "category/" + category.id, category)
  }

  deleteCategory(id: Number): Observable<void>{
    return this.http.delete<void>(endpoint + "category/" + id)
  }


}
