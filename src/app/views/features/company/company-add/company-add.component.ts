import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpApiService } from 'src/app/api/http-api.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent {

  data: any = [{
    f_id: [''],
    name: [''],
    tel: [''],
    address: [''],
    liaison: [''],
    mail: [''],
    enable: [''],
  }]

  FormGroup: FormGroup;
  POSTFactory: HttpApiService[];

  constructor(
    private fb: FormBuilder,
    private HttpApi: HttpApiService,
  ) {
    this.FormGroup = this.fb.group({
      f_id: [''],
      name: ['', [Validators.required]],
      tel: [''],
      address: [''],
      liaison: [''],
      mail: [''],
      enable: [''],
    });
  }

  ngOnInit(): void {
    this.FormGroup = this.fb.group({
      f_id: new FormControl(),
      name: new FormControl(),
      tel: new FormControl(),
      address: new FormControl(),
      liaison: new FormControl(),
      mail: new FormControl(),
      enable: new FormControl(),
    })
  }

  // 新增廠商
  postFactoryRequest(): void {
    let body = {
      name: this.data.name,
      tel: this.data.tel,
      address: this.data.address,
      liaison: this.data.liaison,
      mail: this.data.mail,
      enable: Boolean(this.data.enable),
      creater: "18b3c54e-8e43-4168-8fb8-c76b02776ecf",
    }
    console.log(body)
    this.HttpApi.postFactoryRequest(body)
      .subscribe(res => {
        this.POSTFactory = [res]
        console.log(res.body)
        window.location.assign('main/company/edit-company/' + res.body);
      })
  }

  // 取消並返回
  cancel() {
    window.location.assign('main/company');
  }
}
