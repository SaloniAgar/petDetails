import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pets } from 'src/app/Pets';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  name!: string;
  category!: string;
  breed!: string;
  age!: string;
  color!: string;

  @Output() petAdd : EventEmitter<Pets> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const pet = {
      sno: 14,
      name:this.name,
      category: this.category,
      breed: this.breed,
      age:this.age,
      color : this.color

    }
    this.petAdd.emit(pet);
  }

}
