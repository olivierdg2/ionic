import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RestService, Recette, Category, Ingredient, Step} from "../rest.service";

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.scss'],
})
export class AddRecetteComponent implements OnInit {

  Name: string = "";
  Category: number = 0;
  Ingredients: Ingredient[] = [];
  Preparation: Step[] = [];
  Image: string = "";

  recette = {
    Name: this.Name,
    Category: this.Category,
    Ingredients: this.Ingredients,
    Preparation: this.Preparation,
    Image: this.Image,
  }


  categories: Category[] = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  addRecette() {
    this.rest.addRecette(this.recette).subscribe(
      (result) => this.router.navigate(["/recette/" + result.id])
    );
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
