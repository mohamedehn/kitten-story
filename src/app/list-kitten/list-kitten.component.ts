import { Component } from '@angular/core';
import { KITTENS } from '../mock-kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {

  kitten = KITTENS;
}
