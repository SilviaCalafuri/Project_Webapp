import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StartpageComponent } from '../startpage/startpage.component';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  navigate() {
    this.navCtrl.setRoot(StartpageComponent);
    this.navCtrl.push(StartpageComponent);
  }
}
