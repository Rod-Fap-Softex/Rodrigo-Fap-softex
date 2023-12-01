import readline from 'readline';
import { Calculadora } from './calculadora';
import { Strategy } from './strategy';
import { Sum, Sub, Multi } from './strategy';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (firstNumber) => {
    rl.question('Digite o segundo número: ', (secondNumber) => {
        rl.question('Digite a operação (soma, subtracao, multiplicacao): ', (operation: string) => {
            let strategy: Strategy;
            switch (operation) {
                case 'soma':
                    strategy = new Sum();
                    break;
                case 'subtracao':
                    strategy = new Sub();
                    break;
                case 'multiplicacao':
                    strategy = new Multi();
                    break;
                default:
                    console.log('Operação inválida.');
                    rl.close();
                    return;
            }

            const calculadora = new Calculadora(strategy);
            const result = calculadora.executeStrategy(parseInt(firstNumber), parseInt(secondNumber));
            console.log(`O resultado é: ${result}`);
            rl.close();
        });
    });
});