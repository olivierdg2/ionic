import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSource = new BehaviorSubject("");
  currentSearch = this.searchSource.asObservable();

  constructor() { }

  changeSearch(filter: string){
    this.searchSource.next(filter);
  }
}
