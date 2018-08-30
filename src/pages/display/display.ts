import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from "../../providers/firebase/firebase";

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage implements OnInit{
  public itemlist;


  ngOnInit(): void {
    this.itemlist=this.firestoreservice.getItemList().valueChanges();

  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private  firestoreservice: FirebaseProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

}
