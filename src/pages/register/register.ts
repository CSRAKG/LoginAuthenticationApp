import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
 import {ItemInterface} from "../model/item.interface";
import {AngularFirestore, AngularFirestoreDocument} from "angularfire2/firestore";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FirebaseProvider} from "../../providers/firebase/firebase";
import {DisplayPage} from "../display/display";


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage  {

  public createUserForm: FormGroup;



items: AngularFirestoreDocument<ItemInterface>;
  constructor(public loadingCtrl:LoadingController,
              private formbulider :FormBuilder,
              private firestore: AngularFirestore,
              private alertCtrl:AlertController,
              private fire:AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams,
  private firestoreService: FirebaseProvider
  )
  {
this.createUserForm=this.formbulider.group({
  username: ['',Validators.required],
  password: ['',Validators.required],
  name: ['',Validators.required],
  mobile: ['',Validators.required],
  address: ['',Validators.required]
})
  }




  alert(message: string){
    this.alertCtrl.create({
        title: 'Info!',
        subTitle: message,
        buttons: ['ok']
      }
    ).present();
  }



  async createItem() {
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

    const loading = await this.loadingCtrl.create();

    const username = this.createUserForm.value.username;
    const password = this.createUserForm.value.password;
    const name = this.createUserForm.value.name;
    const address = this.createUserForm.value.address;
    const mobile =this.createUserForm.value.mobile;

   this.firestoreService
      .createItem(username, password, address, name,mobile)
      .then(
        () => {
          loading.dismiss().then(() => {
this.navCtrl.push(DisplayPage)

          });
        },
        error => {
          console.error(error);
        }
      )
    ;
    return await loading.present();
  }
}
