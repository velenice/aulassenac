import { number } from '@inquirer/prompts';

const numero_digitado = await number({
    message: "Digite um número para a tabuada"
})

console.log(`TABUADA DO ${numero_digitado}`)
console.log("=".repeat(15))


