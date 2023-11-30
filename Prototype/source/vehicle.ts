export abstract class Vehicle {
    protected brand : string;
    protected model : string;
    protected numberWheels : number;
    protected color : string;
    
    
    constructor (model : string, brand : string, numWheels: number, color : string){
        this.brand = brand;
        this.model = model;
        this.numberWheels = numWheels;
        this.color = color;
    }

    public abstract clone(brand : string, model : string, numWheels: number, color : string) : Vehicle;

    public toString() : string{
        return this.brand + " - " + this.model + " - " + this.numberWheels + " - " + this.color;
    }
}