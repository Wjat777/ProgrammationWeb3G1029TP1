/*
Par: William John Adam Trindade
2021-11-14
*/
export interface iForfait {
  destination: string;
  villeDepart: string;
  hotel: iHotel;
  dateDepart: Date;
  dateRetour: Date;
  prix: number;
  taxes: string;
  rabais: number;
  vedette: boolean;
}

export interface iHotel {
  nom: string;
  coordonnees: string;
  url: string;
  imagePath: string;
  nombreEtoiles: number;
  nombreChambres: number;
  caracteristiques: string[];
}
