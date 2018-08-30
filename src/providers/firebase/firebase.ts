import {Injectable} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import {ItemInterface} from "../../pages/model/item.interface";

@Injectable()
export class FirebaseProvider {
  constructor(public firestore: AngularFirestore) {
  }

  createItem(
    username: string,
    password: string,
    address: string,
    name: string,
    mobile: number
  ): Promise<void> {
    const id = this.firestore.createId();

    return this.firestore.doc(`items/${id}`).set({
      id,
      username,
      password,
      address,
      name,
      mobile
    });
  }

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
