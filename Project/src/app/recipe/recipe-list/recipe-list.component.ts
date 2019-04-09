import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test', 'this is a test', 'https://hips.hearstapps.com/hmg-prod/images/delish-taco-lime-shrimp-still006-1527253576.jpeg')
  ];
  constructor() { 
    console.log(this.recipes[0])
  }

  ngOnInit() {
  }

}
