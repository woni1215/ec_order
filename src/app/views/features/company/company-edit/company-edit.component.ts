import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpApiService } from 'src/app/api/http-api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent {

  f_data: any = [{
    name: [''],
    tel: [''],
    address: [''],
    liaison: [''],
    mail: [''],
    enable: [''],
  }]

  p_data: any = [{
    name: [''],
    price: [''],
    unit: [''],
    discontinued: [''],
  }]

  f_FormGroup: FormGroup;
  p_FormGroup: FormGroup;
  PATCHFactory: HttpApiService[] = [];
  GETAllProduct: HttpApiService[] = [];
  POSTProduct: HttpApiService[] = [];
  PATCHProduct: HttpApiService[] = [];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private HttpApi: HttpApiService,
  ) {
    this.f_FormGroup = this.fb.group({
      f_id: [''],
      name: ['', [Validators.required]],
      tel: [''],
      address: [''],
      liaison: [''],
      mail: [''],
      enable: [''],
    });
    this.p_FormGroup = this.fb.group({
      name: [''],
      price: [''],
      unit: [''],
      discontinued: [''],
    });
  }

  f_id: any;
  ngOnInit(): void {
    this.f_id = this.route.snapshot.paramMap.get('f_id');
    this.getOneFactoryRequest(this.f_id);
    this.f_FormGroup = this.fb.group({
      f_id: new FormControl(),
      name: new FormControl(),
      tel: new FormControl(),
      address: new FormControl(),
      liaison: new FormControl(),
      mail: new FormControl(),
      enable: new FormControl(),
    });
    this.p_FormGroup = this.fb.group({
      name: new FormControl(),
      price: new FormControl(),
      unit: new FormControl(),
      discontinued: new FormControl(),
    });
  }

  // 取得該產品資料
  getOneProductRequest(p_id: any) {
    this.HttpApi.getOneProductRequest(p_id).subscribe(res => {
      this.p_data.name = res.body.name
      this.p_data.price = res.body.price
      this.p_data.unit = res.body.unit
      this.p_data.discontinued = res.body.discontinued
    })
  }

  // 刪除產品
  p_id: any;
  deleteProduct(p_id: any) {
    this.displayEdit = false;
    Swal.fire({
      title: '刪除產品?',
      text: "刪除後將不可復原!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DC3741',
      cancelButtonColor: '#6E7881',
      confirmButtonText: '刪除',
      cancelButtonText: '取消'
    }).then((result) => {
      if (result.isConfirmed) {
        // 刪除廠商
        this.HttpApi.deleteProductRequest(p_id).subscribe(res => {
          console.log(res)
        })
        Swal.fire(
          '已刪除!',
          '',
          'success'
        )
      }
      this.displayEdit = true;
    })
  }

  // 編輯產品
  patchProductRequest(p_id: any) {
    let id = p_id
    console.log(id)
    let body = {
      name: this.p_data.name,
      price: this.p_data.price,
      unit: this.p_data.unit,
      discontinued: Boolean(this.p_data.discontinued),
    }
    this.HttpApi.patchProductRequest(id, body)
      .subscribe(res => {
        this.PATCHProduct = [res]
        console.log(this.PATCHProduct)
      })
  }

  // 新增產品
  postProductRequest(): void {
    let body = {
      name: this.p_data.name,
      price: this.p_data.price,
      unit: this.p_data.unit,
      discontinued: Boolean(this.p_data.discontinued),
    }
    console.log(body)
    this.HttpApi.postProductRequest(body)
      .subscribe(res => {
        this.POSTProduct = [res]
        console.log(res.body)
      })
  }

  // 開啟新增產品dialog
  displayAdd: boolean = false;
  showAddDialog() {
    this.displayAdd = true;
  }

  // 開啟編輯產品dialog
  displayEdit: boolean = false;
  showEditDialog(p_id: any) {
    this.getOneProductRequest(p_id);
    this.displayEdit = true;
  }

  // 修改廠商
  patchFactoryRequest(f_id: any) {
    let id = f_id
    console.log(id)
    let body = {
      name: this.f_data.name,
      tel: this.f_data.tel,
      address: this.f_data.address,
      liaison: this.f_data.liaison,
      mail: this.f_data.mail,
      enable: this.f_data.enable,
    }
    this.HttpApi.patchFactoryRequest(id, body)
      .subscribe(res => {
        this.PATCHFactory = [res]
        console.log(this.PATCHFactory)
      })
  }

  // 刪除廠商
  deleteFactory(f_id: any) {
    Swal.fire({
      title: '刪除廠商?',
      text: "刪除後將不可復原!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DC3741',
      cancelButtonColor: '#6E7881',
      confirmButtonText: '刪除',
      cancelButtonText: '取消'
    }).then((result) => {
      if (result.isConfirmed) {
        this.HttpApi.deleteFactoryRequest(f_id).subscribe(res => {
          console.log(res)
        })
        Swal.fire(
          '已刪除!',
          '',
          'success'
        )
      }
    })
  }

  // 取得該廠商資料
  getOneFactoryRequest(f_id: any) {
    this.HttpApi.getOneFactoryRequest(f_id).subscribe(res => {
      this.f_data.name = res.body.name
      this.f_data.tel = res.body.tel
      this.f_data.address = res.body.address
      this.f_data.liaison = res.body.liaison
      this.f_data.mail = res.body.mail
      this.f_data.enable = res.body.enable
    })
  }

  // 取消並返回
  cancel() {
    window.location.assign('main/company');
  }
}
