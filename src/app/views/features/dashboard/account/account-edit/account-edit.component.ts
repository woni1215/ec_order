import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpApiService } from './../../../../../api/http-api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent {
  PATCHAccount: HttpApiService[] = [];
  accountdata: any = [{
    name: [''],
    acccount: [''],
    pwd: [''],
    a_id: [''],
    role_id: [''],
  }]
  FormGroup: FormGroup;
  constructor(
    private HttpApi: HttpApiService, private messageService: MessageService, private fb: FormBuilder, private route: ActivatedRoute
  ) {
    this.FormGroup = this.fb.group({
      name: [''],
      acccount: [''],
      pwd: [''],
      a_id: [''],
      role_id: [''],
    });
  }
  a_id: any
  ngOnInit(): void{
    this.FormGroup = this.fb.group({
      name: new FormControl(),
      acccount: new FormControl(),
      pwd: new FormControl(),
      role_id: new FormControl(),
    })
    this.a_id = this.route.snapshot.paramMap.get('a_id')
    console.log("取到的a_id: " + this.a_id)
    this.getOneAccountRequest(this.a_id)
  }
  getOneAccountRequest(a_id: string){
    this.HttpApi.getOneAccountRequest(a_id).subscribe(res => {
      this.accountdata.name = res.body.name
      this.accountdata.acccount = res.body.acccount
      this.accountdata.role_id = res.body.role_id
      console.log(res.body)

    },
      error => {
        console.log(error);
      });
  }
  patchAccountRequest(){
    let body = {
      name: this.accountdata.name,
      acccount: this.accountdata.acccount,
      pwd: this.accountdata.pwd,
      role_id: this.accountdata.role_id,
    }
    this.HttpApi.postProductRequest(body)
      .subscribe(Request => {
        console.log(body)
        this.PATCHAccount = [Request]
        console.log(Request)
        this.accountdata.a_id=Request.body
        console.log("取到的a_id: " + this.accountdata.a_id)
      },
        error => {
          console.log(error);
        })
  }
  //RadioButton
  optiondialog: any[] = [{ name: '一般使用者　', key: 'option1' }, { name: '管理者　', key: 'option2' }];

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: '成功註冊，1秒後導回使用者列表!' });
    setTimeout("location.href='/main/dashboard/account'", 1000); // 1秒後跳轉頁面
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: '註冊失敗，1秒導回使用者列表!' });
    setTimeout("location.href='/main/dashboard/account'", 1000); // 1秒後跳轉頁面
  }
}
