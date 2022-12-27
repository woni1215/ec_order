import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  cols: any[];
  cle: any[];
  constructor() {
    this.cols = [
      { field: 'code', header: '商品名稱' },
      { field: 'name', header: '下單時間' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
  ];
  this.cle = [
    {code:'2021/12/01',name:'吳小姐',category:'EGK30003',
    quantity:'未派工'}
  ]
}
new(){

}
}
