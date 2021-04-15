import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Providers/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public add: FormGroup;
  public recipes: any;
  public recipeById: any;

  constructor(
    public formbuilder: FormBuilder,
    public apiservice: ApiService,
    public router: Router
  ) {
    this.add = formbuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      steps: ['', Validators.required],
      url: ['', Validators.required],
      id: [''],
    });
  }

  ngOnInit(): void {}

  show() {
    this.apiservice.createrecipe(this.add.value).subscribe((result) => {
      console.log(result);
    });
  }

  showById() {
    this.apiservice.getRecipeById(this.add.get('id').value).subscribe((res) => {
      console.log(this.add.get('id').value);
      this.recipeById = res;
    });
  }

  showAll() {
    this.apiservice.getAllRecipes().subscribe((res) => {
      this.recipes = res;
    });
  }

  update() {
    this.apiservice
      .updateRecipes(this.add.get('id').value, this.add.value)
      .subscribe(() => {
        this.add.reset();
        console.log('Recipe Updated');
      });
  }
}
