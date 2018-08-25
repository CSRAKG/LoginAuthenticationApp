import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  @ViewChild('username') uname;
  @ViewChild('password') pname;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  popThis()
  {
    this.navCtrl.pop();
  }
  signIn()
  {
console.log(this.uname.value,this.pname.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

}
