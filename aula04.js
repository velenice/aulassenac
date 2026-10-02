import {number} from '@inquirer/prompts';

const idade = await number ({message:'digite sua idade'});

if(idade>=18){
console.log ("✅entrada libedade:bem-vindoao evento.");
} else {
console.log("⛔ entrada bloqueada: evento retrito para maiores de 18 anos")
}
