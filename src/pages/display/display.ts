import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from "../../providers/firebase/firebase";
import Firestore = firebase.firestore.Firestore;

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
  public item;
  public id;


  ngOnInit(): void {
    this.id= this.firestore.;
    this.item=this.firestoreservice.getItemDetail('id');

  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  firestoreservice: FirebaseProvider,
              private firestore: Firestore) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

}
