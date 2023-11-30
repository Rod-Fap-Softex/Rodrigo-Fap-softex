
import { Sanduiche } from "./sanduiche";
import { Ingredientes } from "./ingredientes";

export class QueijoMussarelaRalado extends Ingredientes{
    sanduiche: Sanduiche;
    constructor(sanduiche: Sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }
    getDescricao(): string {
        return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
    }
    custo(): number {
        return this.sanduiche.custo() + 2.00;
    }
}