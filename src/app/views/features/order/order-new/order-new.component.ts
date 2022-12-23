import { Component } from '@angular/core';

interface option {
  name: string,
}
@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.scss']
})
export class OrderNewComponent {
  op: { name: string}[];
  constructor() {
    this.op = [
        {name: '商品A'},
        {name: '商品B'},
        {name: '商品C'},
    ];
}
}
