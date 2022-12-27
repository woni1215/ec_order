import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService]

})
export class SignupComponent {
  constructor(
    private messageService: MessageService,
) { }

ngOnInit() {
}
showSuccess() {
  this.messageService.add({severity:'success', summary: 'Success', detail: '成功註冊，1秒後導回登入頁面!'});
  setTimeout("location.href='/login'",1000); // 1秒後跳轉頁面
}
showError() {
  this.messageService.add({severity:'error', summary: 'Error', detail: '註冊失敗，1秒導回登入頁面!'});
  setTimeout("location.href='/login'",1000); // 1秒後跳轉頁面
}

}
