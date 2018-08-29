import {Component,  ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
 import {Item} from "../model/item";
import {AngularFirestore, AngularFirestoreDocument} from "angularfire2/firestore";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
export class RegisterPage  {

  public createUserForm: FormGroup;



items: AngularFirestoreDocument<Item>;
  constructor(private formbulider :FormBuilder,private firestore: AngularFirestore,private alertCtrl:AlertController,private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams)

  {
this.createUserForm=this.formbulider.group({
  username: ['',Validators.required],
  password: ['',Validators.required],
  name: ['',Validators.required],
  mobile: ['',Validators.required],
  address: ['',Validators.required]
})
  }

// ionViewDidLoad() {
//     this.itemservice.getItems().subscribe((data)=>{
//     //  console.log(data);
//       this.items=data;
//     })

//}


  alert(message: string){
    this.alertCtrl.create({
        title: 'Info!',
        subTitle: message,
        buttons: ['ok']
      }
    ).present();
  }

registerInUser()
{
  this.fire.auth.createUserWithEmailAndPassword(this.createUserForm.value.username,this.createUserForm.value.password)
    .then((data)=>{
      console.log('got data', data);
      this.alert('Register Sucessfully')
    })
    .catch((error)=>{
      console.log('got error', error.message)
      this.alert(error.message);
    });

  console.log('user register with',this.createUserForm.value.username,this.createUserForm.value.password);

}


}
