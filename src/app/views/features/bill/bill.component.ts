import { Component } from '@angular/core';
import { HttpApiService } from 'src/app/api/http-api.service';

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
  GETAllOrder: HttpApiService[] = [];
  constructor(
    private HttpApi: HttpApiService,
  ) { }

  ngOnInit(): void {
    this.getAllOrderRequest();
  }

  o_id: any
  // 切換到結算頁面
  detail(o_id: any) {
    window.location.assign('main/bill/bill-detail/' + o_id)
  }

  // 取得結算單
  getAllOrderRequest() {
    this.HttpApi.getAllOrderRequest(1).subscribe(res => {
      this.GETAllOrder = res.body
      console.log(res.body)
    })
  }
}
