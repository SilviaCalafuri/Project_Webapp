//hier werden alle die Component definiert
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Auth } from '../_services/auth';

//import { routing } from './app.routes';
import { MyApp } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { StartpageComponent } from '../pages/startpage/startpage.component';
import { HeaderComponent } from '../pages/header/header.component';
import { FooterComponent } from '../pages/footer/footer.component';


@NgModule({
  declarations: [
    MyApp,
    LoginComponent,
    StartpageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginComponent,
    StartpageComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [Auth]
})
export class AppModule {}
