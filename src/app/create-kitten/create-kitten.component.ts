import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})

export class CreateKittenComponent implements OnInit{

  @Output() sendKittenToList : EventEmitter <object> = new EventEmitter();

  public newKitten! : Object; // initialisation d'un nouvel objet pour stocker nos données par la suite

  formSubmitted: boolean = false;

  // utilisation de formGroup de formbuilder pour un formulaire reactive
  kittenForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    race: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    image: new FormControl('', [this.isUrlValid('image'), Validators.required]),
  })


  constructor(private fb: FormBuilder){
  
  }

  ngOnInit(): void {
    
  }

  // fonction qui permet d'ajouter un chaton dans la liste des chatons disponible (list-kitten)
  createKitten(): void {
    const kittenFormValue = this.kittenForm.value; // on stock les valeurs issu du formulaire ici
    this.newKitten = kittenFormValue; // On inject les données dans un nouvel objet qui va contenir ces informations
    this.sendKittenToList.emit(this.newKitten); // avec Output et EventEmitter on envoi les données vers le composant parent
    console.log(this.newKitten);
    this.formSubmitted = true; // Permet de passer le formulaire à true et envoyer le formulaire
  }

  // Fonction pour verifier si l'url est valide
  isUrlValid(image: string): ValidatorFn{
    return(control: AbstractControl) : ValidationErrors | null => {
      const imageValue = control.get(image)?.value //on stock la valeur issu de l'input de Image
      if (typeof imageValue === 'string' && !imageValue.startsWith('http')){ // on vérifie si c'est une string et si elle commence par http
        return {'urlInvalid' : true};
      }else{
          return null
        }
      }
    }
  }



