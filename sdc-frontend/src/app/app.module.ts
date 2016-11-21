//hier werden alle die Component definiert
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

//import { routing } from './app.routes';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginComponent } from '../pages/login/login.component';
import { StartpageComponent } from '../pages/startpage/startpage.component';
import { HeaderComponent } from '../pages/header/header.component';
import { FooterComponent } from '../pages/footer/footer.component';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginComponent,
    StartpageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    //routing
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginComponent,
    StartpageComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})
export class AppModule {}
