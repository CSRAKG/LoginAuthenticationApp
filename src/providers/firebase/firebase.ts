import {Injectable} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import {ItemInterface} from "../../pages/model/item.interface";
import {EventBusProvider} from "../event-bus/event-bus";

@Injectable()
export class FirebaseProvider {
  constructor(public firestore: AngularFirestore,private busEvent:EventBusProvider) {
  }
    public id: string = this.firestore.createId();

  createItem(
    username: string,
    password: string,
    address: string,
    name: string,
    mobile: number
  ): Promise<void> {
    const userid =this.id;
 this.busEvent.announce('current',userid);
    return this.firestore.doc(`items/${userid}`).set({
      userid,
      username,
      password,
      address,
      name,
      mobile
    });
  }
  getId()
  {return this.id}

  getItemList(): AngularFirestoreCollection<ItemInterface> {
    return this.firestore.collection(`items`);
  }

  getItemDetail(itemId: string): AngularFirestoreDocument<ItemInterface> {
    return this.firestore.collection('items').doc(itemId);
  }

  deleteItem(itemId: string): Promise<void> {
    return this.firestore.doc(`items/${itemId}`).delete();
  }
}
