import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpApiService } from 'src/app/api/http-api.service';
import Swal from 'sweetalert2'
import * as XLSX from 'xlsx';

export interface example {
  product_id: string;
  quantity: number;
  unit: string;
  price: number;
  add_price: number;
}

const example: example[] = [
  {
    product_id: 'A上衣',
    quantity: 15,
    unit: '件',
    price: 399,
    add_price: 5985
  },
  {
    product_id: 'B上衣',
    quantity: 40,
    unit: '件',
    price: 599,
    add_price: 23960
  },
];



@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.scss']
})

export class BillDetailComponent {

  example = example;

  data: any = [{
    product_id: [''],
    quantity: [''],
    unit: [''],
    price: [''],
    add_price: [''],
  }]

  FormGroup: FormGroup;
  GETAllOrderDetail: HttpApiService[] = [];
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private HttpApi: HttpApiService,
  ) {
    this.FormGroup = this.fb.group({
      product_id: ['', [Validators.required]],
      quantity: [''],
      unit: [''],
      price: [''],
      add_price: [''],
    });
  }

  o_id: any;
  ngOnInit(): void {
    this.o_id = this.route.snapshot.paramMap.get('o_id');
    this.getAllOrderDetailRequest()
    this.FormGroup = this.fb.group({
      product_id: new FormControl(),
      quantity: new FormControl(),
      unit: new FormControl(),
      price: new FormControl(),
      add_price: new FormControl(),
    })
  }

  excel = '訂單明細.xlsx'
  // 匯出excel
  export(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(example);
    console.log('worksheet', worksheet);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    console.log('book', book);
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.excel);
  }

  // 開啟匯款dialog
  display: boolean = false;
  showDialog() {
    this.display = true;
  }

  // 匯款
  remit() {
    this.display = false;
    Swal.fire(
      '匯款完成!',
      '總金額：' + '元',
      'success'
    )
  }

  // 取得結算單
  getAllOrderDetailRequest() {
    this.HttpApi.getAllOrderDetailRequest(1).subscribe(res => {
      this.GETAllOrderDetail = res.body
      console.log(res.body)
      this.data.add_price = res.body.quantity * res.body.price
    })
  }

  // 取消並返回
  cancel() {
    window.location.assign('main/bill');
  }
}
