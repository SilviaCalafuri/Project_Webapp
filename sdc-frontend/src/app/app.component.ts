//hier wird die Root-page declariert

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginComponent } from '../pages/login/login.component';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})

export class MyApp {
  rootPage = LoginComponent;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
