import { Vehicle } from "./vehicle";

export class Truck extends Vehicle{
    private torque : number;

    constructor(brand : string, model: string, numWheels: number, color : string, torque : number){
        super(brand, model, numWheels, color);
        this.torque = torque;
    }

    public override clone (brand : string, model : string, numWheels: number, color : string, torque ?: number) : Vehicle{
        let dolly = Object.create(this);
        dolly.brand = brand;
        dolly.model = model;
        dolly.numbereWheels = numWheels;
        dolly.color = color;
        dolly.torque = torque;
        return dolly;
    }

    public override toString() : string{
        return super.toString() + " - " + this.torque;
    }


}