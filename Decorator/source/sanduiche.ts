export abstract class Sanduiche {
    descricao = "Sanduíche mutivariado";
    getDescricao(): string {
        return this.descricao;
    }
    abstract custo(): number;
}