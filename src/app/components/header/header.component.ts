import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/shared/data/menu/menu';
import {MenuItem} from 'primeng/api';

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
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'Angular Website',
            icon: 'pi pi-external-link',
            url: 'http://angular.io'
        },
        {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
        }
    ];
      // {
      //   label: '首頁',
      //   url: '/main/dashboard',
      // },
      // {
      //   label: '組織',
      //   //url: '/main/organizations',
      // },
      // {
      //   label: '使用者',
      //   //url:'/main/users',
      // },
      // {
      //   label: '角色',
      //   //url:'/main/roles',
      // },
      // {
      //   label: '權限',
      //   //url:'/main/permissions',
      // },
      // {
      //   label: '模型',
      // },
      // {
      //   label: '適配器',
      // },
      // {
      //   label: '供應商',
      //   url: '/main/providers',
      // },
      // {
      //   label: '應用',
      //   url: '/main/applications',
      // },
      // {
      //   label: '資源',
      //   url: '/main/resources',
      // },
      // {
      //   label: '日誌',
      //   url: '/main/records',
      // },
      // {
      //   label: 'Token',
      //   url: '/main/token',
      // },
      // {
      //   label: 'Webhook',
      //   url: '/main/webhook',
      // },
      // {
      //   label: '同步器',
      // },
      // {
      //   label: '證書',
      // },
      // {
      //   label: '商品',
      // },
      // {
      //   label: '付款',
      // },
      // {
      //   label: '系統信息',
      // },
      // {
      //   label: 'API文檔',
      // }
    //]
  }

  visibleSidebar() {
    this.Sidebar = true;

  }
}


