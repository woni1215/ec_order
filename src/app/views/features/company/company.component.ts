import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  constructor(){}
  ngOnInit(): void{}
  addItem() {
    // window.location.assign('main/');
  }
  editItem(f_id:any) {
    // window.location.assign('main/');
  }
}
