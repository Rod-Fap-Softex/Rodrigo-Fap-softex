import { Cliente } from "./base/cliente";
import { Loja } from "./base/loja";
import { Observer } from "./base/observer";

var joao = new Cliente("João Victor", "jvm@softex.com.br");
var rodrigo = new Cliente("Rodrigo Duarte", "rds@softex.com.br");
var thiago = new Cliente("Thiago Jomar", "tjf@softex.com.br");


var nadjaImports = new Loja("Softex Imports", "eltrônicos");

Observer.addCliente(joao);
Observer.addCliente(rodrigo);
Observer.addCliente(thiago);

nadjaImports.publicarNovoProduto("Macbook M3  Pro Max 32gb - R$ 55.000,00");
nadjaImports.publicarNovoProduto("Framework Laptop 16 32gb - R$ 10.000,00");