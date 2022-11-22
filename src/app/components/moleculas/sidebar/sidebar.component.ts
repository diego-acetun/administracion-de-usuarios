import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  mostrar = false;
  constructor() {}

  ngOnInit(): void {}
  click() {
    this.mostrar = !this.mostrar;
  }
}
