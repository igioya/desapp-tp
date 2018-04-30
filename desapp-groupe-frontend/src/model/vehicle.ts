export class Vehicle {

  public model:string;
	public type:VehicleType ;
	public numberOfPassengers:number;
	public description:string ;
	public photo:string ;
}

  export enum VehicleType {
    Motorbike,
    Car,
    Truck
}
