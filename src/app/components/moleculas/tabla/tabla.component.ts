import { Component, Input, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces/usuario';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  @Input() usuarios!: usuario[];
  constructor() {}

  ngOnInit(): void {}
}
