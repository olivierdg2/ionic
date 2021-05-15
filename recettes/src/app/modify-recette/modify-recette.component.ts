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

  Id: number =0;
  Name: string = "";
  Category: any = {
    id:0,
    name:"",
    description:""
  };
  Ingredients: Ingredient[] = null;
  Preparation: Step[] = null;
  Image: string = "";
  createdAt: Date = new Date;

  recette:any;
  categories: Category[] = [];
  private sub: any;
  constructor(private route: ActivatedRoute, public rest:RestService, private router: Router) {

   }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.getRecette(params['id']);
      console.log(this.recette);
    })
    this.getCategories();
  }

  getRecette(id: number) {
    this.rest.getRecette(id).subscribe(
      (resp) => {
        console.log(resp);
        this.recette = resp;
      },(error) =>{
        console.log(error)
      }
    )
  }

  addRecette() {
    
    if (!(typeof this.recette.category == "string")){
      this.recette.category = this.recette.category.id;
    }
    else {
      this.recette.category = parseInt(this.recette.category);
    }
    console.log(this.recette)
    this.rest.modifyRecette(this.recette).subscribe(
      (result) => this.router.navigate(["/recette/" + result.id]));
  }

  getCategories() {
    this.rest.getCategories().subscribe(
      (resp) => {
        console.log(resp);
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
    console.log(this.recette.Ingredients)
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
