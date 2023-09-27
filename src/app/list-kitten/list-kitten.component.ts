import { Component, EventEmitter, Output } from '@angular/core';
import { KITTENS } from '../mock-kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {

  @Output() sendKittenToMyCat: EventEmitter<any> = new EventEmitter();

  kitten = KITTENS;

  onAdoptKitten(index: number): void {
    if (index >= 0 && index < this.kitten.length) { //permet de vérifier l'index du chat selectionné pour adoption
      const adoptedKitten = this.kitten[index]; // permet de stocker les données dans une constante
      console.log(adoptedKitten); //log du chat sélectionné
      this.kitten.splice(index, 1); // suppression du tableau du chat sélectionné
      this.sendKittenToMyCat.emit(adoptedKitten) // envoi du chat adopter vers user-kitten
    }
  }
  
}
