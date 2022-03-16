import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pets } from 'src/app/Pets';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent implements OnInit {

  @Input()
  pet!: Pets;

  @Output() petDelete : EventEmitter<Pets> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(pet : Pets){
    this.petDelete.emit(pet)  //it will reach it's parent component pets
    console.log("Deleted clicked")
  }

}
