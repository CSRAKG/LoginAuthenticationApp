import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-event-log',
  templateUrl: 'event-log.html',
})
export class EventLogPage {
  response: string;
  str: object;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http
    , public modal: ModalController) {
  }

  openModal(){
    const myModal = this.modal.create('ModalPage');
    myModal.present();
  }

  event() {
    const url = 'https://dron.limited/digimess/appapi/BasicInfo/ManageEvents.php';
    const data1 = new FormData();
    data1.append("type", "fetchevents");
    this.http.post(url, data1)
      .subscribe(data => {
        this.response = data['_body'];
        this.str = JSON.parse(this.response);
      }, error => {
        console.log();
      });
    // Print response data
  }

  ionViewDidLoad() {
    this.event();
    console.log('ionViewDidLoad EventLogPage');
  }

}
