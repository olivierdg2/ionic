import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.component.html',
  styleUrls: ['./modify-category.component.scss'],
})
export class ModifyCategoryComponent implements OnInit {

  category: any;
  private sub: any;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.getCategory(params['id']);
    })
    console.log(this.category)
  }

  getCategory(id: number) {
    this.rest.getCategory(id).subscribe(
      (resp) => {
        console.log(resp);
        this.category = resp;
      },(error) =>{
        console.log(error)
      }
    )
  }
  addCategory() {
    this.rest.modifyCategory(this.category).subscribe(
      (result) => this.router.navigate(["/categories"]));
    console.log(this.category);
  }
}
