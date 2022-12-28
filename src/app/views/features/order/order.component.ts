import { Component } from '@angular/core';
import { HttpApiService } from './../../../api/http-api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  GETAllOrder: HttpApiService[] = [];
  // cols: any[];
  // cle: any[];
  constructor(private HttpApi: HttpApiService) {
  //   this.cols = [
  //     { field: 'code', header: '商品名稱' },
  //     { field: 'factory', header: '廠商' },
  //     { field: 'status', header: '訂單狀態' },
  //     { field: 'quantity', header: 'Quantity' }
  // ];
  // this.cle = [
  //   {code:'2021/12/01',factory:'A廠商',status:'成立中',
  //   quantity:'未派工'}
  // ]
}
getAllOrderDetailRequest(): void{
  this.HttpApi.getAllOrderDetailRequest(1).subscribe(res => {
      this.GETAllOrder = res.body.factorys
    console.log(this.GETAllOrder)
  },
  error => {
    console.log(error);
  });
}
neworder(){
  window.location.assign('main/order/order-new');
}
editorder(){
  window.location.assign('main/order/order-edit');
}
}
