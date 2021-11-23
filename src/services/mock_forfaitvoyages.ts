/*
Par: William John Adam Trindade
2021-11-15-
*/
import { iForfait } from '../model/InterfaceForfait';

export const FVs: iForfait[] = [
  {
    destination: 'Brésil\\Rio de Janeiro',
    villeDepart: 'Québec',
    hotel: {
      nom: 'Copacabane Hotel',
      coordonnees:
        'Av. Atlântica, 1702 - Copacabana, Rio de Janeiro - RJ, 22021-001, Brésil',
      url: 'https://www.belmond.com/hotels/south-america/brazil/rio-de-janeiro/belmond-copacabana-palace/about',
      imagePath: '../../../assets/images/hotel1.jpg',
      nombreEtoiles: 5,
      nombreChambres: 226,
      caracteristiques: [
        'SPA',
        'Piscine Interieur',
        'Accès Plage',
        '45 min Aeroport',
        'Restaurent',
      ],
    },
    dateDepart: new Date('2021-12-27'),
    dateRetour: new Date('2022-01-20'),
    prix: 1500,
    taxes: 'Taxes et frais inclus',
    rabais: 200,
    vedette: true,
  },
  {
    destination: 'USA\\New York',
    villeDepart: 'Montreal',
    hotel: {
      nom: 'Hilton Garden Inn Times Square',
      coordonnees: '790 Eighth Avenue, New York, NY 10019-7568',
      url: 'https://www.hilton.com/en/hotels/nycmwgi-hilton-garden-inn-times-square/',
      imagePath: '../../../assets/images/hotel2.jpg',
      nombreEtoiles: 5,
      nombreChambres: 100,
      caracteristiques: [
        'Free WiFi',
        'Fiteness Center',
        'Pas des animaux de companies',
        'Business Center',
      ],
    },
    dateDepart: new Date('2021-12-27'),
    dateRetour: new Date('2022-01-20'),
    prix: 282,
    taxes: 'Taxes et frais inclus',
    rabais: 0,
    vedette: false,
  },
  {
    destination: 'France\\Paris',
    villeDepart: 'Montréal',
    hotel: {
      nom: 'ibis Paris Tour Eiffel',
      coordonnees: '2 Rue Cambronne, 15e arr., 75015 Paris, France ',
      url: 'https://all.accor.com/hotel/1400/index.fr.shtml',
      imagePath: '../../../assets/images/hotel3.jpg',
      nombreEtoiles: 3,
      nombreChambres: 50,
      caracteristiques: [
        'Wi-Fi gratuit',
        'Restaurant',
        'Animaux de compagnie acceptés',
        'Buanderie',
      ],
    },
    dateDepart: new Date('2021-12-27'),
    dateRetour: new Date('2022-01-20'),

    prix: 200,
    taxes: 'Taxes et frais inclus',
    rabais: 50,
    vedette: false,
  },
  {
    destination: 'Emirate\\Dubai',
    villeDepart: 'Toronto',
    hotel: {
      nom: 'W Dubai - The Palm',
      coordonnees:
        'Crescent Rd, The Palm Jumeirah - Dubai - Émirats arabes unis',
      url: 'https://www.marriott.com/hotels/travel/dxbtp-w-dubai-the-palm/',
      imagePath: '../../../assets/images/wdubai.jpg',
      nombreEtoiles: 5,
      nombreChambres: 350,
      caracteristiques: [
        'Animaux de compagnie acceptés',
        'Piscine',
        'Face à la plage',
        'Animaux de compagnie acceptés',
        'Spa',
      ],
    },
    dateDepart: new Date('2021-12-27'),
    dateRetour: new Date('2022-01-20'),

    prix: 500,
    taxes: 'Taxes et frais inclus',
    rabais: 100,
    vedette: false,
  },
  {
    destination: 'Chine\\Hong Kong',
    villeDepart: 'Toronto',
    hotel: {
      nom: 'The Ritz-Carlton, Hong Kong',
      coordonnees:
        'International Commerce Centre (ICC), 1 Austin Rd W, Tsim Sha Tsui, Hong Kong',
      url: 'https://www.ritzcarlton.com/en/hotels/china/hong-kong/spa',
      imagePath: '../../../assets/images/hotel4.jpg',
      nombreEtoiles: 5,
      nombreChambres: 600,
      caracteristiques: [
        'SPA',
        'Business Center',
        'Restaurant Michelin Star',
        'Shoping Center',
        '',
      ],
    },
    dateDepart: new Date('2021-12-27'),
    dateRetour: new Date('2022-01-20'),

    prix: 396,
    taxes: 'Taxes et frais inclus',
    rabais: 0,
    vedette: true,
  },
];
