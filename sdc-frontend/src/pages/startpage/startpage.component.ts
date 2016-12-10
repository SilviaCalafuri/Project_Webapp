import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

//import { ProjectsService } from '../_services/ProjectsService';

@Component({
  selector: 'page-startpage',
  templateUrl: './startpage.component.html',
  providers: []
})

export class StartpageComponent {

  constructor(private navController: NavController) {
    this.navController = navController;
  }

    ngOnInit() {

    }

}
