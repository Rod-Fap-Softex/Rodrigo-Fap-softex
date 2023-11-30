
import { Sanduiche } from "./sanduiche";
import { Ingredientes } from "./ingredientes";

export class Pepperoni extends Ingredientes{
    sanduiche: Sanduiche;
    constructor(sanduiche: Sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }
    getDescricao(): string {
        return this.sanduiche.getDescricao() + ", Pepperoni";
    }
    custo(): number {
        return this.sanduiche.custo() + 0.99;
    }
}