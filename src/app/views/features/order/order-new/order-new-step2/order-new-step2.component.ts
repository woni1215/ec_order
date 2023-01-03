import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpApiService } from 'src/app/api/http-api.service';

interface option {
  product: string;
}

@Component({
  selector: 'app-order-new-step2',
  templateUrl: './order-new-step2.component.html',
  styleUrls: ['./order-new-step2.component.scss']
})
export class OrderNewStep2Component {
  op: option[];
  GETOneOrder: HttpApiService[] = [];
  POSTNewOrder: HttpApiService[] = [];
  orderdata: any = [{
    product: [''],
    quantity: [''],
    o_id: [''],
  }]
  FormGroup: FormGroup;
  constructor(private HttpApi: HttpApiService, private messageService: MessageService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.op = [
      { product: '商品A' },
      { product: '商品B' },
      { product: '商品C' },
    ];
    this.FormGroup = this.fb.group({
      product: [''],
      quantity: [''],
      o_id: [''],
    });
  }
  o_id: any;
  ngOnInit(): void {
    this.FormGroup = this.fb.group({
      product: new FormControl(),
      quantity: new FormControl(),
    })
    this.o_id = this.route.snapshot.paramMap.get('o_id')
    console.log("取到的o_id: " + this.o_id)
    this.getOneOrderRequest(this.o_id)
  }
  getOneOrderRequest(o_id: any): void {
    this.HttpApi.getOneOrderRequest(o_id).subscribe(res => {
      this.GETOneOrder = res.body
      console.log(this.GETOneOrder)
    },
      error => {
        console.log(error);
      });
  }
  postProductRequest(): void {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: '新增成功' });
    let body = {
      o_id: this.o_id,
      product: this.orderdata.product,
      quantity: this.orderdata.quantity,

    }
    this.HttpApi.postProductRequest(body)
      .subscribe(Request => {
        console.log(body)
        this.POSTNewOrder = [Request]
        console.log(Request)
        this.getOneOrderRequest(this.o_id)
      },
        error => {
          console.log(error);
        })
  }
  onChange1(event: any) {
    this.orderdata.product = event.value.product;
  }
}
