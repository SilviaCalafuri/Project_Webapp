import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {

  constructor(public navCtrl: NavController) {

  }

}
