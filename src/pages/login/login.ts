import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
 import {AlertController} from "ionic-angular";
 import {ApiUserProvider} from "../../providers/api-user/api-user";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') user;
  @ViewChild('password') pass;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,
              private api : ApiUserProvider
              ) {

  }

alert(message: string){
this.alertCtrl.create({
  title: 'Info!',
  subTitle: message,
  buttons: ['ok']
  }
).present();
}

  signInUser() {
    console.log(this.user.value);
    console.log(this.pass.value);
this.api.login(this.user.value,this.pass.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
