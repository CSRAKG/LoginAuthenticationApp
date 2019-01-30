import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {
  qrData = null;
  createdcode = null;
  scannercode = null;
  constructor(public navCtrl: NavController  ) {
  }

  createCode() {
    this.createdcode = this.qrData;
  }

  scanCode() {

   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePage');
  }
}
