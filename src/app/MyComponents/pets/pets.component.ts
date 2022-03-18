import { Component, OnInit } from '@angular/core';
import { map } from '@firebase/util';
import { PetsService } from 'src/app/pets.service';
import { Pets } from '../../Pets';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets!: Pets[];
  //localItem: string|null;
  constructor(private petsService : PetsService) { 
    this.petsService.getPets().subscribe(data => {
      this.pets = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as object
        } as Pets;
      })
    });
    if(this.pets === null){
      this.pets = []
    }
    // if(this.localItem === null){
    //   this.pets = []
    // }else{
    //   this.pets = JSON.parse(this.localItem)
    // }
  }

  ngOnInit(): void {
  }

  deletePet(pet : Pets){
    console.log(pet);
    this.petsService.deletePet(pet.id)
    //const index = this.pets.indexOf(pet)
    //this.pets.splice(index,1)
    //localStorage.setItem("pets",JSON.stringify(this.pets))

  }

  addPet(pet : Pets){
    console.log(pet);
    this.petsService.createPet(pet)
    //this.pets.push(pet)
    //localStorage.setItem("pets",JSON.stringify(this.pets))
  }
}
