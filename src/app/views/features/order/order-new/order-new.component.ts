import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpApiService } from './../../../../api/http-api.service';
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
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.scss']
})
export class OrderNewComponent {
  // cols: any[] = [];
  // cle: any[] = [];
  op: option[];
  op2: option2[];
  // op3: option3[];
  POSTNewOrder: HttpApiService[] = [];
  GETOneOrder: HttpApiService[] = [];
  orderdata: any = [{
    factory: [''],
    product: [''],
    demand: [''],
    quantity: [''],
    price: [''],
    o_id: [''],
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
    // this.op3 = [
    //   { price: '75' },
    //   { price: '65' },
    //   { price: '70' },
    // ];
    this.FormGroup = this.fb.group({
      factory: [''],
      product: [''],
      price: [''],
      demand: [''],
      quantity: [''],
      o_id: [''],
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
  o_id: any;
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
    })
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
        this.POSTNewOrder = [Request]
        console.log(Request)
        this.orderdata.o_id=Request.body
        console.log("取到的o_id: " + this.o_id)
        this.getOneOrderRequest(this.o_id)
      },
        error => {
          console.log(error);
        })
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
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: '新增成功' });
    //setTimeout("location.href='/main/order'", 1000); // 1秒後跳轉頁面
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
  // onChange3(event: any) {
  //   if(this.orderdata.factory == "廠商A" && this.orderdata.product == "產品A"){
  //     this.messageService.add({severity:'error', summary: 'Error', detail: '只能選75元'});
  //     this.orderdata.price = event.value.code;
  //   }
  // }
}
