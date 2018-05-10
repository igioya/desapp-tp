import { Publication } from './publication';
import { Vehicle, VehicleType } from './vehicle';

export var VEHICLES: Vehicle[] = [
  { id: 11, model: 'Fiat 500', type: VehicleType.Car, numberOfPassengers: 5, description: 'color rosa', photo:'https://cdn.pixabay.com/photo/2018/04/04/08/04/car-3289114__340.jpg' },
  { id: 12, model: 'Mustang', type: VehicleType.Car, numberOfPassengers: 4,description: 'Deportivo de lujo', photo:'https://cdn.pixabay.com/photo/2017/04/06/22/11/auto-2209439__340.png' },
  { id: 13, model: 'Camion', type: VehicleType.Truck, numberOfPassengers: 3, description: 'Camion para transporte', photo:'https://cdn.pixabay.com/photo/2018/03/08/14/58/usa-3208827__340.jpg' },
  { id: 14, model: 'Honda Crf100f', type: VehicleType.Motorbike, numberOfPassengers: 2, description: 'Moto ', photo:'https://cdn.pixabay.com/photo/2018/04/03/08/15/motorbike-3286222__340.jpg' }
 ];

export var PUBLICATIONS: Publication[] = [
  { id: 11, vehicle: VEHICLES[0], retireAddress: 'Saenz Peña 500, Bernal', returnAddress: 'Saenz Peña 500, Bernal', telephone: '42243131', owner: 'Mr. Nice', costPerHour: 100 },
  { id: 12, vehicle: VEHICLES[1], retireAddress: 'Saenz Peña 600, Bernal', returnAddress: 'Saenz Peña 600, Bernal', telephone: '42244141', owner: 'Ioia', costPerHour: 200 },
  { id: 13, vehicle: VEHICLES[2], retireAddress: 'Saenz Peña 700, Bernal', returnAddress: 'Saenz Peña 700, Bernal', telephone: '42245151', owner: 'Bombasto', costPerHour: 300 },
  { id: 14, vehicle: VEHICLES[3], retireAddress: 'Saenz Peña 800, Bernal', returnAddress: 'Saenz Peña 800, Bernal', telephone: '42246161', owner: 'Celeritas', costPerHour: 50}
];


