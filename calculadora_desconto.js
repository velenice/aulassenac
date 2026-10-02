import { select, number } from "@inquirer/prompts";

const valor = await number({message: "Digite o valor total da compra: "});

const forma_de_pagamento = await select({
message: 'selecione aforma de pagamento',
choices:[
{name: "pix( 10% de desconto)", value: "pix"},
{name:"cartao  a vista (5% de descont", value: "avista"},
{name:"cartao parcelado (sem descont}", value: "parcelado"}
]})

let valor_descontado;

switch (forma_de_pagamento){
    default:
        console.log(("opção inválida"))
        break;
    case "pix":
        valor_descontado= valor* 0.9
        break; 
    case "avista":
        valor_descontado = valor* 0.95
        break; 
    case "parcelado":
        valor_descontado = valor* 1
        break; 
}

console.log(`valor a pagar: R$ ${valor_descontado}`)

