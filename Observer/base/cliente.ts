export class Cliente{
    private nome : string;
    private email : string;

    constructor(nome : string, email : string){
        this.nome = nome;
        this.email = email;
    }

    toString() : string{
        return "Cliente " + this.nome + "End.de email" + this.email
    }

}