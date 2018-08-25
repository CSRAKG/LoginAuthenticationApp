import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {  AboutPageModule} from '../about/about.module';
import {ContactPageModule} from "../contact/contact.module";
import {HomePageModule} from "../home/home.module";
import {FirstPage} from "../first/first";

/**
 * Generated class for the PrimaryTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-primary-tabs',
  templateUrl: 'primary-tabs.html'
})
export class PrimaryTabsPage {

  homeRoot = 'HomePage'
  aboutRoot = 'AboutPage'
  contactRoot = 'ContactPage'


  constructor(public navCtrl: NavController) {

  }
  openFirstPage()
  {
    this.navCtrl.push(FirstPage);
  }

}
