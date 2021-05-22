import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() in_filter = "";
  filter = "";
  subscription: Subscription;

  constructor(private router: Router, private search: SearchService) { 
    this.subscription = this.search.currentSearch.subscribe(filter => this.filter = filter);
  }

  ngOnInit(): void {
    
  }
  send_search(event: any){
    this.search.changeSearch(event.target.value)
  }
  recettes() {
    this.search.changeSearch("");
    this.router.navigate(["/recettes"]);
  }
  categories() {
    this.search.changeSearch("");
    this.router.navigate(["/categories"]);
  }
  reload() {
    location.reload();
  }

}
