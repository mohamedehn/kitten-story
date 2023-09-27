import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {

  @Input() adoptedKittens: any[] = []; // On initialise un tableau vide qui va venir stocker les données du chaton adopté

  getNewKitten(kitten: any): void {
    this.adoptedKittens.push(kitten)
  }
}
