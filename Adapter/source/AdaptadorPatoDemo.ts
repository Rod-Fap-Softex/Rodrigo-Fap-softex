import { AdaptadorPato } from "./AdaptadorPato";

export class AdaptadorPatoDemo {
    static demonstrar(adaptador: AdaptadorPato) {
      console.log('Demonstrando o adaptador:');
      adaptador.andar();
      adaptador.voar();
    }
}