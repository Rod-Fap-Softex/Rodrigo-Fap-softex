import { Vehicle } from "./vehicle";

export class Car extends Vehicle{
    private numDoors : number;
    private horsePower : number;

    constructor(brand : string, model : string, numWheels: number, color : string, numDoors : number, horsePower : number){
        super(brand, model, numWheels, color);
        this.numDoors = numDoors;
        this.horsePower = horsePower;
    }

    public override clone(brand  : string, model: string, numWheels: number, color : string, numDoors?: number, horsePower?: number) : Vehicle{
        let dolly = Object.create(this);
        dolly.brand = brand;
        dolly.model = model;
        dolly.numeroWheels = numWheels;
        dolly.color = color;
        dolly.numDoors = numDoors;
        dolly.horsepower = horsePower;
        return dolly;
    }

    public override toString() : string{
        return super.toString() + " - " + this.numDoors + " - " + this.horsePower;
    }
}