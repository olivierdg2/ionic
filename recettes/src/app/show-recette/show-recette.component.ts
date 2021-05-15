import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService, Recette, Recette_Category, Ingredient, Step } from '../rest.service';

@Component({
  selector: 'app-show-recette',
  templateUrl: './show-recette.component.html',
  styleUrls: ['./show-recette.component.scss'],
})
export class ShowRecetteComponent implements OnInit {

  name: string = "";
  category: Recette_Category = {
    id: 0,
    name:""
  };
  Ingredients: Ingredient[] = [];
  Preparation: Step[] = [];
  image: string = "";
  recette = {
    name: this.name,
    category: this.category,
    Ingredients: this.Ingredients,
    Preparation: this.Preparation,
    image: this.image,
  }

  private sub: any;
  constructor(private route: ActivatedRoute, public rest:RestService) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.getRecette(params['id']);
      console.log(this.recette);
    })
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

}
