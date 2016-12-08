import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { ProjectsService } from '../services/ProjectsService';

@Component({
  selector: 'page-startpage',
  templateUrl: './startpage.component.html',
  providers: [ProjectsService]
})

export class StartpageComponent {

  constructor(private navController: NavController, private navParams: NavParams, private projectsService: ProjectsService) {
    this.navController = navController;
    this.projectsService = projectsService;
    this.navParams = navParams.get('item');
  }

    ngOnInit() {
        this.projectsService.findAll().subscribe(
            data => this.projectsService = data
        );
    }

    itemTapped(event, property) {
        this.navController.push(StartpageComponent, { property: property });
    }

}
