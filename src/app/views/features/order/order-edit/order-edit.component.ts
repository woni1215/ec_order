import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
interface option {
  name: string,
}
interface option2 {
  name: string,
}
@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent {
  op: option[];
  op2: option2[];
  constructor(private messageService: MessageService,) {
    this.op = [
        {name: '廠商A'},
        {name: '廠商B'},
        {name: '廠商C'},
    ];
    this.op2 = [
      {name: '商品A'},
      {name: '商品B'},
      {name: '商品C'},
  ];
}
showSuccess() {
  this.messageService.add({severity:'success', summary: 'Success', detail: '新增成功，1秒後跳轉至訂單列表頁面'});
  setTimeout("location.href='/main/order'",1000); // 1秒後跳轉頁面
}
}
