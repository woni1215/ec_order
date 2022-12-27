import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
  constructor(
    private fb: FormBuilder,
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

  cancel() {
    window.location.assign('main/company');
  }
}
