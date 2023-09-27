import { Component } from '@angular/core';
import { KITTENS } from './mock-kitten';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kitten-story';

  adoptedKittens: any[] = [];

  kitten = KITTENS;

  // permet de récupérer les données du chaton qui sera adopté et transférer dans le user-kitten
  getNewKitten(event: any): void {
    this.adoptedKittens.push(event)
  }

  //permet de récuperer les données du formulaire pour créer une nouvelle fiche de chaton
  onReceiveNewKitten(event: any): void {
    this.kitten.push(event)
  }
}
