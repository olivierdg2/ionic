import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {RestService, Recette} from '../rest.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent implements OnInit {

  recettes: Recette[] = [];
  filter: String;
  subscription: Subscription;

  constructor(private router: Router, public rest:RestService,private search: SearchService) { 
    this.filter = "";
    this.subscription = this.search.currentSearch.subscribe(filter => this.filter = filter);
  }

  ngOnInit(): void {
    this.getRecettes();
  }

  getRecettes() {
    this.rest.getRecettes().subscribe(
      (resp) => {
        console.log(resp);
        this.recettes = resp;
      },(error) =>{
        console.log(error)
      }
    )
  }

  addRecette() {
    this.router.navigate(['/add-recette']);
  }

  showRecette(index : any) {
    this.router.navigate(['/recette',index]);
  }

  modifyRecette(index : any) {
    this.router.navigate(['/recette/modify',index]);
  }


  deleteRecette(id : Number, index : any) {
    this.rest.deleteRecette(id).subscribe((res)=>{
      this.recettes.splice(index, 1)
      
    },(error) =>{
      console.log(error)
    })
  }

}
