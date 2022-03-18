import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pets } from './Pets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private firestore : AngularFirestore) { }

  getPets() {
    return this.firestore.collection('petsInfo').snapshotChanges();
  }

  createPet(pet : Pets){
    return this.firestore.collection('petsInfo').add(pet)
  }

  updatePet(pet : Pets){
    return this.firestore.doc('petsInfo/'+pet.id).update(pet)
  }

  deletePet(petId: string){
    this.firestore.doc('petsInfo/' + petId).delete();
  }
}
