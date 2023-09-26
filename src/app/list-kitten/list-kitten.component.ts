import { Component, EventEmitter, Output } from '@angular/core';
import { KITTENS } from '../mock-kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {

  @Output() sendKittenToMyCat : EventEmitter <object> = new EventEmitter();

  kitten = KITTENS;

  onReceiveNewKitten(event: any): void {
    this.kitten.push(event)
  }

  onAdoptKitten(index: number): void {
    if (index >= 0 && index < this.kitten.length) { //permet de vérifier l'index du chat selectionné pour adoption
      const adoptedKitten = this.kitten[index]; // permet de stocker les données dans une constante
      console.log(adoptedKitten);
      this.sendKittenToMyCat.emit(adoptedKitten) //envoi les données vers un composant parent
      this.kitten.splice(index, 1);
    }
  }
  
}
