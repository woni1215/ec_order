import { Component } from '@angular/core';
import { HttpApiService } from 'src/app/api/http-api.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  example = [
    {
      name: 'A服飾',
      tel: '0912345678',
      address: '高雄市楠梓區創新路1號',
      liaison: '吳小姐',
      mail: 'abc@gmail.com',
      enable: '未啟用'
    }
  ]
  GETAllFactory: HttpApiService[];
  constructor(
    private HttpApi: HttpApiService,
  ) { }

  ngOnInit(): void {
    this.getAllFactoryRequest();
  }

  // 取得所有廠商資料
  getAllFactoryRequest() {
    this.HttpApi.getAllFactoryRequest(1).subscribe(res => {
      this.GETAllFactory = res.body.factorys
      console.log(res.body)
    })
  }

  // 新增廠商
  addItem() {
    window.location.assign('main/company/add-company');
  }

  // 編輯廠商
  editItem(f_id: any) {
    window.location.assign('main/company/edit-company/' + f_id);
  }
}
