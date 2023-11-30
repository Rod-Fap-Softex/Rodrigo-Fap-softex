import { QueijoMussarelaRalado } from "./mussarela";
import { FrangoAssado } from "./frangoAssado";
import { Pepperoni } from "./pepperoni";

let sanduicheDeFrango = new FrangoAssado();
let sanduicheDeFrangoComPepperoni = new Pepperoni(sanduicheDeFrango);
let sanduicheDeFrangoComPepperoniEQueijo = new QueijoMussarelaRalado(sanduicheDeFrangoComPepperoni);

console.log(`\n--------------------------------- ROTISSERIE SOFTEX S.A. ---------------------------------\n`);
console.log(`${sanduicheDeFrangoComPepperoniEQueijo.getDescricao()} custa $${sanduicheDeFrangoComPepperoniEQueijo.custo().toFixed(2)} \n`);
console.log(`-------------------------------------------------------------------------------------------------------------------------\n`);
