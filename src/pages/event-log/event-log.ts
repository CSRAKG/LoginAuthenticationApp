import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {FormGroup} from "@angular/forms";

/**
 * Generated class for the EventLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-log',
  templateUrl: 'event-log.html',
})
export class EventLogPage {

  response: string;



  constructor(public navCtrl: NavController, public navParams: NavParams,private http :Http) {
  }
  event() {
    const url = 'https://dron.limited/digimess/appapi/BasicInfo/ManageEvents.php';
    const data1 = new FormData();
    data1.append("type", "fetchevents");
    this.http.post(url, data1)
      .subscribe(data => {
        this.response = JSON.stringify(data);
       }, error => {
        console.log(error);
      });
    // Print response data
    console.log('hi',this.response);
   }

  ionViewDidLoad() {
    this.event();
    console.log('ionViewDidLoad EventLogPage');
  }

}
