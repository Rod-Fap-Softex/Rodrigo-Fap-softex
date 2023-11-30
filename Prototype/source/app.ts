import { Car } from "./car";
import { Truck } from "./truck";
import { Vehicle } from "./vehicle";


let listVehicle = new Array<Vehicle>();

let carModel = new Car("Renault", "Kardian", 4, "Copper", 5, 125);
listVehicle.push(carModel);

let truckModel = new Truck("Peterbilt", "389X ", 6, "Yellow", 525, 2400);
listVehicle.push(truckModel);
// mkng clones:
let cloneCar1 = carModel.clone("Toyota", "supra", 4, "Silver", 5, 345);
listVehicle.push(cloneCar1);

let clonecar2 = carModel.clone("Kia", "Rio", 4, "Black", 5, 95);
listVehicle.push(clonecar2);

let cloneTruck1 = truckModel.clone("Mack", "Anthem", 2, "Grey", 500, 2170);
listVehicle.push(cloneTruck1);

let cloneTruck2 = truckModel.clone("Volvo", "FH", 6, "Red", 480, 2600);
listVehicle.push(cloneTruck2);

// Um array de clones não foi criado, uma vez que já nos utilizamos -clone- para criar a listVehicle

//console.log(listVehicle);

console.table(listVehicle);

listVehicle.forEach(element => {
    console.log(element.toString());
});