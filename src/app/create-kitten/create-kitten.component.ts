import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit{

  formSubmitted: boolean = false;

  kittenForm = this.fb.group({
    name: new FormControl(''),
    race: new FormControl(''),
    birthDate: new FormControl(''),
    image: new FormControl(Image),
  })


  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log("L'ajout du chat a été effectué", this.kittenForm.value);
    this.formSubmitted = true;
  }
}
