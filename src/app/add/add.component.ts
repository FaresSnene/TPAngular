import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public add: FormGroup;

  constructor(public formbuilder: FormBuilder) {
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
    });
  }

  ngOnInit(): void {}

  show() {
    console.log(this.add.value);
  }
}
