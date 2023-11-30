class SistemaSeguranca{
    private static instance: SistemaSeguranca;
    private senhaAcesso:string;

    private constructor(){
        this.senhaAcesso = "eureka";
    }

    public static getInstance():SistemaSeguranca{
        if (!SistemaSeguranca.instance){
            SistemaSeguranca.instance = new SistemaSeguranca();
        }
        return SistemaSeguranca.instance;
    }

    public acessarBaseSecreta (senha:string|null){
        if (senha === this.senhaAcesso){
            console.log("Acesso Liberado");
      }else {
            console.log("Acesso Negado!!");
        }
    }
}


/*Prog. Principal*/

const sistemaSeguranca = SistemaSeguranca.getInstance();
const senhaAgente = prompt("Digite a senha: ");

sistemaSeguranca.acessarBaseSecreta(senhaAgente);




