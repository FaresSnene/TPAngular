import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Providers/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public add: FormGroup;

  constructor(public formbuilder: FormBuilder, public apiservice: ApiService) {
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
    this.apiservice.getRecipeById(this.add.value);
    console.log(this.add.value + 'Hello');
    /* console.log(res);*/
  }
}
