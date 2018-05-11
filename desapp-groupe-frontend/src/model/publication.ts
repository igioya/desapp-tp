import { Vehicle } from './vehicle';
import { User } from './user';


export class Publication {
  id: number;
  vehicle: Vehicle;
  retireAddress: string;
  returnAddress: string;
  telephone: string;
  costPerHour: number;
  //reservations : any[]; //no para esta entrega
  owner: User;

  constructor(
    vehicle: Vehicle,
    retireAddress: string,
    returnAddress: string,
    telephone: string,
    costPerHour: number,
    owner: User,
  	id?:number)	{

      this.id = id,
      this.vehicle = vehicle;
      this.retireAddress = retireAddress;
      this.returnAddress = returnAddress;
      this.telephone = telephone;
      this.costPerHour = costPerHour;
      //this.reservations = [];
      this.owner = owner;
    }
}
