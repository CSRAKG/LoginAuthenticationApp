import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') name;
  @ViewChild('password') pass;


  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }


registerInUser()
{
  this.fire.auth.createUserWithEmailAndPassword(this.name.value,this.pass.value)
    .then((data)=>{
      console.log('got data', data);
    })
    .catch((error)=>{
      console.log('got error', error.message)
    });

  console.log('user register with',this.name.value,this.pass.value);

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
