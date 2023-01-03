import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpApiService } from 'src/app/api/http-api.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  GETAllAccount: HttpApiService[] = [];
  GETOneAccount: HttpApiService[] = [];
  constructor(private HttpApi: HttpApiService, private messageService: MessageService, private route: ActivatedRoute) {

  }
  a_id: any;
  ngOnInit(): void {
    this.getAllAccountRequest()
    this.a_id = this.route.snapshot.paramMap.get('a_id')
    console.log("取到的a_id: " + this.a_id)
  }
  getAllAccountRequest(){
    this.HttpApi.getAllAccountRequest(1).subscribe(res => {
      this.GETAllAccount = res.body
      console.log(this.GETAllAccount)
    },
      error => {
        console.log(error);
      });
  }
}
