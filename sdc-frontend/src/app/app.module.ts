//hier werden alle die Component definiert
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginComponent } from '../pages/login/login.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginComponent
  ],
  providers: []
})
export class AppModule {}
