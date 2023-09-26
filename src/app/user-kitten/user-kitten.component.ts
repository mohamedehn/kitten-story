import { Component } from '@angular/core';
import { KITTENS } from '../mock-kitten';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {

  myKitten! : Kitten

  getNewKitten(event: any): void {
    this.myKitten = event
  }
}
