import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
//import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],

})
export class SignupComponent {
  constructor(
    private messageService: MessageService,
    //private primengConfig: PrimeNGConfig
) { }

ngOnInit() {
    //this.primengConfig.ripple = true;
}
  showMessage() {
      this.messageService.add({key: 'tl',severity:'info', summary: 'Record is added successully', detail:'record added'});
      console.log(this.messageService.messageObserver)
  }

}
