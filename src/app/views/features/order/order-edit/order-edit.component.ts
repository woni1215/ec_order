import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpApiService } from './../../../../api/http-api.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface option {
  factory: string;
}
interface option2 {
  product: string;
}
interface option3 {
  price: string;
}
@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent {
  // cols: any[] = [];
  // cle: any[] = [];
  op: option[];
  op2: option2[];
  o_id: any;
  GETOneOrder: HttpApiService[] = [];
  PATCHOrder: HttpApiService[] = [];
  orderdata: any = [{
    o_id: [''],
    factory: [''],
    product: [''],
    demand: [''],
    quantity: [''],
    price: [''],
    // aa_q: [''],
    // ab_q: [''],
    // ac_q: [''],
    // ba_q: [''],
    // bb_q: [''],
    // bc_q: [''],
    // ca_q: [''],
    // cb_q: [''],
    // cc_q: [''],
  }]
  FormGroup: FormGroup;
  constructor(private HttpApi: HttpApiService, private messageService: MessageService, private fb: FormBuilder, private route: ActivatedRoute) {
    // this.cols = [
    //   { field: 'factory', header: '廠商' },
    //   { field: 'product', header: '產品' },
    //   { field: 'price', header: '價錢'},
    //   { field: 'unit', header: '單位' },
    //   { field: 'quantity', header: '數量' }
    // ];
    // this.cle = [
    //   {
    //     factory: 'A廠商',product:'A產品', price: '$75', unit: '件',quantity: '50'
    //   }
    // ]
    this.op = [
      { factory: '廠商A' },
      { factory: '廠商B' },
      { factory: '廠商C' },
    ];
    this.op2 = [
      { product: '商品A' },
      { product: '商品B' },
      { product: '商品C' },
    ];
    this.FormGroup = this.fb.group({
      factory: [''],
      product: [''],
      demand: [''],
      quantity: [''],
      price: [''],
      // aa_q: [''],
      // ab_q: [''],
      // ac_q: [''],
      // ba_q: [''],
      // bb_q: [''],
      // bc_q: [''],
      // ca_q: [''],
      // cb_q: [''],
      // cc_q: [''],
    });
  }
  ngOnInit(): void {
    this.FormGroup = this.fb.group({
      factory: new FormControl(),
      product: new FormControl(),
      demand: new FormControl(),
      quantity: new FormControl(),
      price: new FormControl(),
      // aa_q: new FormControl(),
      // ab_q: new FormControl(),
      // ac_q: new FormControl(),
      // ba_q: new FormControl(),
      // bb_q: new FormControl(),
      // bc_q: new FormControl(),
      // ca_q: new FormControl(),
      // cb_q: new FormControl(),
      // cc_q: new FormControl(),
    });
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
      factory: this.orderdata.factory,
      product: this.orderdata.product,
      demand: this.localToUtc(this.orderdata.demand),
      quantity: this.orderdata.quantity,
      // aa_q: this.orderdata.aa_q,
      // ab_q: this.orderdata.ab_q,
      // ac_q: this.orderdata.ac_q,
      // ba_q: this.orderdata.ac_q,
      // bb_q: this.orderdata.bb_q,
      // bc_q: this.orderdata.bc_q,
      // ca_q: this.orderdata.ca_q,
      // cb_q: this.orderdata.cb_q,
      // cc_q: this.orderdata.cc_q,
    }
    this.HttpApi.postProductRequest(body)
      .subscribe(Request => {
        console.log(body)
        console.log(Request)
        this.orderdata.o_id=Request.body
        console.log("取到的o_id: " + this.o_id)
        this.getOneOrderRequest(this.o_id)
      },
        error => {
          console.log(error);
        })
  }
  patchFactoryRequest(o_id: string): void {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: '修改成功' });
    let body = {
      factory: this.orderdata.factory,
      product: this.orderdata.product,
      demand: this.localToUtc(this.orderdata.demand),
      quantity: this.orderdata.quantity,
      // aa_q: this.orderdata.aa_q,
      // ab_q: this.orderdata.ab_q,
      // ac_q: this.orderdata.ac_q,
      // ba_q: this.orderdata.ac_q,
      // bb_q: this.orderdata.bb_q,
      // bc_q: this.orderdata.bc_q,
      // ca_q: this.orderdata.ca_q,
      // cb_q: this.orderdata.cb_q,
      // cc_q: this.orderdata.cc_q,
    }
    this.HttpApi.patchFactoryRequest(o_id, body)
      .subscribe(Request => {
        this.PATCHOrder = [Request]
        console.log(Request)
        this.getOneOrderRequest(this.o_id)
      })
  }
  deleteOrderRequest(o_id: any): void {
    this.HttpApi.deleteOrderRequest(o_id).subscribe(Request => {
      console.log(Request)
      this.getOneOrderRequest(o_id)
    })
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: '修改成功' });
    //setTimeout("location.href='/main/order'",1000); // 1秒後跳轉頁面
  }
  localToUtc(date: Date): Date {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
  }
  onChange1(event: any) {
    this.orderdata.factory = event.value.code;
  }
  onChange2(event: any) {
    this.orderdata.product = event.value.code;
  }
}
