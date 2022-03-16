import { Component, OnInit } from '@angular/core';
import { Pets } from '../../Pets';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets!: Pets[];
  localItem: string|null;
  constructor() { 
    this.localItem=localStorage.getItem("pets")
    if(this.localItem === null){

      this.pets = []
    }else{
      this.pets = JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
  }

  deletePet(pet : Pets){
    console.log(pet);
    const index = this.pets.indexOf(pet)
    this.pets.splice(index,1)
    localStorage.setItem("pets",JSON.stringify(this.pets))
  }

  addPet(pet : Pets){
    console.log(pet);
    this.pets.push(pet)
    localStorage.setItem("pets",JSON.stringify(this.pets))
  }
}
