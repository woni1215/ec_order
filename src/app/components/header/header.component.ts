import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/shared/data/menu/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Sidebar = false;

  constructor() { }
  items: MenuItem[] = [];
  ngOnInit(): void {
    this.items = [
      {
        label: '電商訂貨系統',
        routerLink: '/main/dashboard'
      },
      {
        label: '訂單管理',
        routerLink: '/main/order'
      },
      {
        label: '結算單管理',
        routerLink: '/main/bill'
      },
      {
        label: '廠商管理',
        routerLink: '/main/company'
      }
    ];
  }

  visibleSidebar() {
    this.Sidebar = true;
  }
}


