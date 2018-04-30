export class Vehicle {

  public id:number;
  public model:string;
	public type:VehicleType ;
	public numberOfPassengers:number;
	public description:string ;
  public photo:string ;
  
  constructor(
    model: string,
  	type: VehicleType,
  	numberOfPassengers: number,
  	description: string,
  	photo: string,
  	id?:number)	{

  	this.id = id;
    this.model = model
		this.type = type;
		this.numberOfPassengers = numberOfPassengers;
		this.description = description;
		this.photo = photo;
	}
}

  export enum VehicleType {
    Motorbike,
    Car,
    Truck
}
