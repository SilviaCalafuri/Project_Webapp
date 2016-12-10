import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Auth } from '../../_services/auth';

import { StartpageComponent } from '../startpage/startpage.component';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html',
  providers: [Auth],
})

export class LoginComponent {

  constructor(public navCtrl: NavController, private auth: Auth, public alertCrtl: AlertController) { }

  login(FormLogin) {
    this.auth.login(FormLogin.value).subscribe(data => {
      if(data.success === true) {
        this.navCtrl.setRoot(StartpageComponent);
      } else {
        FormLogin.password = '';
        let alert = this.alertCrtl.create ({
          title: "Login Failed",
          subTitle: data.message,
          buttons: ["OK"]
        })
        alert.present();
      }
    })
  }

  ionViewDidLoad() {
    console.log("Hello Login Page");
  }
}
