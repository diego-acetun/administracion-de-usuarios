import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
})
export class BotonComponent implements OnInit {
  @Input() texto = 'default text';
  @Input() color = 'bg-blue-700 hover:bg-blue-800';
  constructor() {}

  ngOnInit(): void {}
}
