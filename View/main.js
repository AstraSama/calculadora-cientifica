const operacoes = require("../Model/index.js");
const prompt = require("prompt-sync")();

let saida = 0;
let resultado = 0;

do{
    console.log("Qual operação quer realizar?\n'+' para Adição.\n'-' para Subtração.\n'x' para Multiplicação.\n'/' para Divisão.\n'%' para Porcentagem.\n'clear' para limpar resposta.\n'sair' para fechar programa\n");
    let resposta = prompt("Responda aqui: ");

    switch (resposta) {
        case "+":
            let aux_soma = 0;
            let num2_soma;

            if(resultado) {
                num2_soma = +prompt("Escreva o segundo número: ");

                do{
                    if(isNaN(num2_soma)) {
                        num2_soma = +prompt("Escreva o segundo número corretamente: ");
                    } else {
                        aux_soma = 1;
                    }
                } while(!aux_soma);

                resultado = operacoes.SOMA(resultado, num2_soma);

            } else {
                let num1_soma = +prompt("Escreva o primeiro número: ");
    
                do{
                    if(isNaN(num1_soma)) {
                        num1_soma = +prompt("Escreva o primeiro número corretamente: ");
                    } else {
                        aux_soma = 1;
                    }
                } while(!aux_soma);
    
                aux_soma = 0;
    
                num2_soma = +prompt("Escreva o segundo número: ");
    
                do{
                    if(isNaN(num2_soma)) {
                        num2_soma = +prompt("Escreva o segundo número corretamente: ");
                    } else {
                        aux_soma = 1;
                    }
                } while(!aux_soma);
    
                resultado = operacoes.SOMA(num1_soma, num2_soma);
                
            }
            
            console.log("\nO resultado dessa adição é ", resultado);
            


        break;

        case "-":
            let aux_menos = 0;
            let num2_menos;

            if(resultado) {
                num2_menos = +prompt("Escreva o segundo número: ");

                do{
                    if(isNaN(num2_menos)) {
                        num2_menos = +prompt("Escreva o segundo número corretamente: ");
                    } else {
                        aux_menos = 1;
                    }
                } while(!aux_menos);

                resultado = operacoes.SUBTRACAO(resultado, num2_menos);

            } else {
                let num1_menos = +prompt("Escreva o primeiro número: ");
    
                do{
                    if(isNaN(num1_menos)) {
                        num1_menos = +prompt("Escreva o primeiro número corretamente: ");
                    } else {
                        aux_menos = 1;
                    }
                } while(!aux_menos);
    
                aux_menos = 0;
    
                num2_menos = +prompt("Escreva o segundo número: ");
    
                do{
                    if(isNaN(num2_menos)) {
                        num2_menos = +prompt("Escreva o segundo número corretamente: ");
                    } else {
                        aux_menos = 1;
                    }
                } while(!aux_menos);
    
                resultado = operacoes.SUBTRACAO(num1_menos, num2_menos);

            }

            console.log("\nO resultado dessa subtração é ", resultado);
        break;

        case "x":
            let aux_x = 0;
            let num2_x;

            if(resultado) {
                num2_x = +prompt("Escreva o segundo número: ");

                do{
                    if(isNaN(num2_x)) {
                        num2_x = +prompt("Escreva o segundo número corretamente: ");
                    } else {
                        aux_x = 1;
                    }
                } while(!aux_x);

                resultado = operacoes.MULTIPLICACAO(resultado, num2_x);

            } else {
                let num1_x = +prompt("Escreva o primeiro número: ");
    
                do{
                    if(isNaN(num1_x)) {
                        num1_x = +prompt("Escreva o primeiro número corretamente: ");
                    } else {
                        aux_x = 1;
                    }
                } while(!aux_x);
    
                aux_x = 0;
    
                num2_x = +prompt("Escreva o segundo número: ");
    
                do{
                    if(isNaN(num2_x)) {
                        num2_x = +prompt("Escreva o segundo número corretamente: ");
                    } else {
                        aux_x = 1;
                    }
                } while(!aux_x);
    
                resultado = operacoes.MULTIPLICACAO(num1_x, num2_x);

            }

            console.log("\nO resultado dessa multiplicação é ", resultado);
        break;

        case "/":
            let aux_divisao = 0;
            let num2_divisao;

            if(resultado) {
                num2_divisao = +prompt("Escreva o segundo número: ");

                do{
                    if(isNaN(num2_divisao)) {
                        num2_divisao = +prompt("Escreva o segundo número corretamente: ");
                    } else {
                        aux_divisao = 1;
                    }
                } while(!aux_divisao);

                resultado = operacoes.DIVISAO(resultado, num2_divisao);

            } else {
                let num1_divisao = +prompt("Escreva o primeiro número: ");
    
                do{
                    if(isNaN(num1_divisao)) {
                        num1_divisao = +prompt("Escreva o primeiro número corretamente: ");
                    } else {
                        aux_divisao = 1;
                    }
                } while(!aux_divisao);
    
                aux_divisao = 0;
    
                num2_divisao = +prompt("Escreva o segundo número: ");
    
                do{
                    if(isNaN(num2_divisao)) {
                        num2_divisao = +prompt("Escreva o segundo número corretamente: ");
                    } else {
                        aux_divisao = 1;
                    }
                } while(!aux_divisao);
    
                resultado = operacoes.DIVISAO(num1_divisao, num2_divisao);

            }

            console.log("\nO resultado dessa divisão é ", resultado);
        break;

        case "%":
            let resultado_percent;
            let aux_percent = 0

            if(resultado) {
                resultado_percent = resultado / 100;

            } else {
                do{
                    let num1_percent = +prompt("Escreva o número para porcentagem: ");

                    if(isNaN(num1_percent)) {
                        num1_percent = +prompt("Escreva o número corretamente: ");
                    } else {
                        aux_percent = 1;
                        resultado_percent = num1_percent / 100;
                    }
                } while(!aux_percent);


            }

            console.log("\nO resultado dessa porcentagem é ", resultado_percent);
        break;

        case "clear": 
            resultado = "";

        break;

        case "sair":
            saida = 1;

        break;

        default:
            console.log("\nDigite uma opção válida.\n");
    }
} while(!saida);
