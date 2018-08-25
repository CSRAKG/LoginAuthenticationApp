import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {  AboutPageModule} from '../pages/about/about.module';
 import {ContactPageModule} from "../pages/contact/contact.module";
import {HomePageModule} from "../pages/home/home.module";
 import {FirstPageModule} from "../pages/first/first.module";
import {LoginPageModule} from "../pages/login/login.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {AngularFireModule} from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth=
{
  apiKey: "AIzaSyD8xfgjTJaJz3jgl6KfBqEvx_eBDCg5wOY",
    authDomain: "test-project-cc356.firebaseapp.com",
  databaseURL: "https://test-project-cc356.firebaseio.com",
  projectId: "test-project-cc356",
  storageBucket: "test-project-cc356.appspot.com",
  messagingSenderId: "492825718509"
};

@NgModule({
  declarations: [
    MyApp,



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AboutPageModule,
    ContactPageModule,
    HomePageModule,
    FirstPageModule,
    LoginPageModule,
    RegisterPageModule



  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
