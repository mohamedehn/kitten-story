import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})

export class CreateKittenComponent implements OnInit{

  @Output() sendKittenToList : EventEmitter <object> = new EventEmitter();

  public newKitten! : Object

  formSubmitted: boolean = false;

  kittenForm = this.fb.group({
    name: new FormControl(''),
    race: new FormControl(''),
    birthDate: new FormControl(''),
    image: new FormControl('', [this.isUrlValid('image')]),
  })


  constructor(private fb: FormBuilder){
  
  }

  ngOnInit(): void {
    
  }

  createKitten(): void {
    this.formSubmitted = true;
    const kittenFormValue = this.kittenForm.value;
    this.newKitten = kittenFormValue;
    this.sendKittenToList.emit(this.newKitten);
    console.log(this.newKitten);
  }

  isUrlValid(image: string): ValidatorFn{
    return(control: AbstractControl) : ValidationErrors | null => {
      const imageValue = control.get(image)?.value
      if (typeof imageValue === 'string' && !imageValue.startsWith('http')){
        return {'urlInvalid' : true};
      }else{
          return null
        }
      }
    }
  }



