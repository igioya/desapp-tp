import { User } from './user';
export class Reservation {

    //public id:number;
    public client:User;
    public fromDate;
    public toDate;
    //public state:string;
    
    constructor(
        /*id:number,*/
        client:User,
        fromDate,
        toDate/*,
        state:string*/)	{
  
        /*this.id = id;*/
        this.client = client;
        this.fromDate = fromDate;
        this.toDate = toDate;
        //this.state = state;
    }
}