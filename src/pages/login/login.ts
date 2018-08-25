import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {AlertController} from "ionic-angular";
import {LoggedInPage} from "../logged-in/logged-in";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') user;
  @ViewChild('password') pass;
  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

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
    this.fire.auth.signInWithEmailAndPassword(this.user.value,this.pass.value)
      .then((data)=>{
        console.log('you sign in',this.fire.auth.currentUser);
        this.alert('success');
        this.navCtrl.setRoot(LoggedInPage);

      })
      .catch((error)=>{
        console.log('error is', error.message);
        this.alert('error');
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
