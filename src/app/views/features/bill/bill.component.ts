import { Component } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent {
  example = [
    {
      name: 'A服飾',
      quantity: 50,
      status: '已送出',
    }
  ]
  export(){
    window.location.assign('main/bill/bill-detail')
  }
}
