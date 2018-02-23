import { Component, OnInit } from '@angular/core';
import {Classroom} from '../../models/classroom';
import {SessionService} from '../../shared-services/session/session.service';
import {ClassroomService} from '../../shared-services/classroom/classroom.service';
import {Category} from '../../models/category';
import {CategoryService} from '../../shared-services/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  cols: any[];
  categories: Category[] = [];
  selectedCategory: Category;
  userSession: number;
  rolSession: string;

  constructor(
    private sessionService: SessionService,
    private categoryService: CategoryService
  ) {
    this.userSession = this.sessionService.USERID;
    this.rolSession = this.sessionService.USER;

  }

  ngOnInit() {
    this.getCategories();
    this.defineCategoryCols();
  }



  onCategorySelected() {

  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      res => {
        this.categories = res;
      }
    );
  }

  defineCategoryCols() {
    this.cols = [
      {field: 'Name', header: 'Nombre'},
      {field: 'Description', header: 'Descripcion'},
      {field: 'Observation', header: 'Observacion'}
    ];
  }
}
