import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpApiService } from './../../api/http-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService]

})
export class SignupComponent {
  POSTNewAccount: HttpApiService[] = [];
  signupdata: any = [{
    name: [''],
    acccount: [''],
    pwd: [''],
    s_id: [''],
    role_id: [''],
  }]
  FormGroup: FormGroup;
  constructor(
    private HttpApi: HttpApiService, private messageService: MessageService, private fb: FormBuilder
  ) {
    this.FormGroup = this.fb.group({
      name: [''],
      acccount: [''],
      pwd: [''],
      s_id: [''],
      role_id: [''],
    });
  }

  ngOnInit(): void {
    this.FormGroup = this.fb.group({
      name: new FormControl(),
      acccount: new FormControl(),
      pwd: new FormControl(),
      role_id: new FormControl(),
    })
  }
  postAccountRequest() {
    let body = {
      name: this.signupdata.name,
      acccount: this.signupdata.acccount,
      pwd: this.signupdata.pwd,
      role_id: 1,
    }
    this.HttpApi.postProductRequest(body)
      .subscribe(Request => {
        console.log(body)
        this.POSTNewAccount = [Request]
        console.log(Request)
        this.signupdata.s_id = Request.body
        console.log("取到的s_id: " + this.signupdata.s_id)
      },
        error => {
          console.log(error);
        })
  }
  //RadioButton
  optiondialog: any[] = [{ name: '一般使用者　', key: 'option1' }, { name: '管理者　', key: 'option2' }];

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: '成功註冊，1秒後導回登入頁面!' });
    setTimeout("location.href='/login'", 1000); // 1秒後跳轉頁面
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: '註冊失敗，1秒導回登入頁面!' });
    setTimeout("location.href='/login'", 1000); // 1秒後跳轉頁面
  }

}
