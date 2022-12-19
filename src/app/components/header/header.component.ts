import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Sidebar = false;

  constructor() { }

  ngOnInit(): void { }

  visibleSidebar() {
    this.Sidebar = true;
    console.log("Sidebar: " + this.Sidebar)
  }
}


