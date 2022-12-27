import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.scss']
})
export class BillDetailComponent {

  example = [
    {
      name: 'A上衣',
      quantity: 15,
      unit: '件',
      price: 399,
      total_price: 5985
    }
  ]

  data: any = [{
    name: [''],
    quantity: [''],
    status: [''],
  }]

  FormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {
    this.FormGroup = this.fb.group({
      name: ['', [Validators.required]],
      quantity: [''],
      status: [''],
    });
  }

  ngOnInit(): void {
    this.FormGroup = this.fb.group({
      name: new FormControl(),
      quantity: new FormControl(),
      status: new FormControl(),
    })
  }
  display: boolean = false;
  showDialog() {
    this.display = true;
  }

  remit() {
    this.display = false;
    Swal.fire(
      '匯款完成!',
      '總金額：' + '元',
      'success'
    )
  }


  cancel() {
    window.location.assign('main/bill');
  }
}
