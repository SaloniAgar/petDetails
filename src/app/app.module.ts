import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './MyComponents/pets/pets.component';
import { PetItemComponent } from './MyComponents/pet-item/pet-item.component';
import { AddPetComponent } from './MyComponents/add-pet/add-pet.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFirestoreModule} from "@angular/fire/compat/firestore"

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetItemComponent,
    AddPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
