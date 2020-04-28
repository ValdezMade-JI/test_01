import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  categories: any;
  constructor(public categoriesSrv: CategoriesService) {

  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.categoriesSrv.get()
      .then(res => {
        this.categories = res;
      })
      .catch(err => {
        console.log(err);
      })
  }

  
}
