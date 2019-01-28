import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
 import {HomePageModule} from "../pages/home/home.module";
 import {LoginPageModule} from "../pages/login/login.module";
    import { ApiUserProvider } from '../providers/api-user/api-user';
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MyApp,



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      HomePageModule,
     LoginPageModule,
       HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     ApiUserProvider,
    HttpClient


  ]
})
export class AppModule {}
