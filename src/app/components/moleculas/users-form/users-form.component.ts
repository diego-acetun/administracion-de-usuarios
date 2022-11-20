import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
})
export class UsersFormComponent implements OnInit {
  public formLogin!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    let date: Date = new Date();
    console.log('Date = ' + date);
    this.formLogin = this.formBuilder.group({
      name: [''],
      fechaNacimiento: [],
      email: [''],
      password: [''],
    });
  }
}
