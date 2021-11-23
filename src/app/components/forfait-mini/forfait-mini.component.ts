/*
Par: William John Adam Trindade
2021-11-15
*/
import { Component, Input } from '@angular/core';
import { iForfait } from 'src/model/InterfaceForfait';

@Component({
  selector: 'forfait-mini',
  templateUrl: './forfait-mini.component.html',
  styleUrls: ['./forfait-mini.component.scss'],
})
export class ForfaitMiniComponent {
  @Input() forfait: iForfait = {
    destination: '',
    villeDepart: '',
    hotel: {
      nom: '',
      coordonnees: '',
      url: '',
      imagePath: '',
      nombreEtoiles: 0,
      nombreChambres: 0,
      caracteristiques: [],
    },
    dateDepart: new Date(),
    dateRetour: new Date(),
    prix: 0,
    taxes: '',
    rabais: 0,
    vedette: false,
  };

  constructor() {}

  diffDateInDays(start: Date, end: Date) {
    //source https://stackoverflow.com/questions/43735678/typescript-get-difference-between-two-dates-in-days
    return Math.ceil(end.valueOf() - start.valueOf()) / (1000 * 3600 * 24);
  }
}
