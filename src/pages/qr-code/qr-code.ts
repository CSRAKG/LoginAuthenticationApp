import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {
  qrData = null;
  createdcode = null;
  scannercode = null;
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
  }

  createCode() {
    this.createdcode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannercode = barcodeData.text;
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePage');
  }
}
