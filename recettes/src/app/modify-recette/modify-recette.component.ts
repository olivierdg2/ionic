import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Ingredient, RestService, Step } from '../rest.service';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-modify-recette',
  templateUrl: './modify-recette.component.html',
  styleUrls: ['./modify-recette.component.scss'],
})

export class ModifyRecetteComponent implements OnInit {

  id: number = 0;
  Name: string = "";
  Category: number = 0;
  Ingredients: Ingredient[] = [];
  Preparation: Step[] = [];
  Image: string = "";

  recette = {
    id: this.id,
    name: this.Name,
    category: this.Category,
    Ingredients: this.Ingredients,
    Preparation: this.Preparation,
    image: this.Image,
  }

  categories: Category[] = [];
  private sub: any;
  constructor(private route: ActivatedRoute, public rest:RestService, private router: Router) {

   }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.getRecette(params['id']);
    })
    this.getCategories();
  }

  getRecette(id: number) {
    this.rest.getRecette(id).subscribe(
      (resp) => {
        this.recette = resp;
        this.recette.category = resp.category.id;
      },(error) =>{
        console.log(error)
      }
    )
  }

  addRecette() {
    this.rest.modifyRecette(this.recette).subscribe(
      (result) => this.router.navigate(["/recette/" + result.id]));
  }

  getCategories() {
    this.rest.getCategories().subscribe(
      (resp) => {
        this.categories = resp;
      },(error) =>{
        console.log(error)
      }
    )
  }

  addIngredient(){
    var new_Ingredient = {
      Ingredient: "",
      Quantity: ""
    }
    this.recette.Ingredients.push(new_Ingredient);
  }

  deleteIngredient(id:number){
    this.recette.Ingredients.splice(id,1);
  }

  addStep(){
    var new_Step = {
      Step: "",
    }

    this.recette.Preparation.push(new_Step);
  }

  deleteStep(id:number){
    this.recette.Preparation.splice(id,1);
  }

}
