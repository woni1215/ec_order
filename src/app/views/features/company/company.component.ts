import { Component } from '@angular/core';

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
  constructor() { }
  ngOnInit(): void { }
  addItem() {
    window.location.assign('main/company/add-company');
  }
  editItem(f_id: any) {
    window.location.assign('main/company/edit-company');
  }
}
