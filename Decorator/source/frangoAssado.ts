import { Sanduiche } from "./sanduiche";
import { Ingredientes } from "./ingredientes";

export class FrangoAssado extends Sanduiche {
    descricao = "Sanduíche de Frango Assado";
    custo(): number {
        return 4.50;
    }
}