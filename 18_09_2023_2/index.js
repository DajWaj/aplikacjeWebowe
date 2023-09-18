const prompt = require("prompt-sync")({ sigint: true });
//npm install prompt-sync

console.log(`[Kalkulator]\n1. (+)\n2. (-)\n3. (*)\n4. (/)\n`);

w = Number(prompt('Wybor: '));

a = Number(prompt('Podaj liczbe 1: '));
b = Number(prompt('Podaj liczbe 2: '));

switch(w)
{
    case 1: 
        console.log(`(+): ${a + b}`);
        break;
    case 2: 
        console.log(`(-): ${a - b}`);
        break;
    case 3: 
        console.log(`(*): ${a * b}`);
        break;
    case 4: 
        console.log(`(/): ${a / b}`);
        break;
    default: 
        console.log(`nie dokonano wyboru`);
        break;
}

// console.log(`(+): ${a + b}\n(-): ${a - b}\n(*): ${a * b}\n(/): ${a / b}`);