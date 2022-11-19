import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
})
export class BotonComponent implements OnInit {
  @Input() texto = 'default text';
  constructor() {}

  ngOnInit(): void {}
}
