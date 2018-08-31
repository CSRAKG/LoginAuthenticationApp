import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from "../../providers/firebase/firebase";
import {EventBusProvider} from "../../providers/event-bus/event-bus";
import {Observable} from "rxjs/Observable";
import {ItemInterface} from "../model/item.interface";

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
public id:string;
  ngOnInit(): void {



  }

  constructor(private eventBus: EventBusProvider,public navCtrl: NavController, public navParams: NavParams,private  firestoreservice: FirebaseProvider) {

  }

  ionViewDidLoad() {

this.id=this.firestoreservice.getId();
      console.log('it is',this.id);
      this.item=this.firestoreservice.getItemDetail(this.firestoreservice.getId()).valueChanges();


    console.log('ionViewDidLoad DisplayPage');
  }

}
