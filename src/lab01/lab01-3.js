import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

rl.question('Input size: ', (size) => {

    let string = "";

    for (let i = 1; i <= size; i++) {
        for (let j = 0; j < size - i; j++) {
            string += " ";
        }
        for (let k = 0; k < i; k++) {
            string += "*";
        }
        string += "\n";
    }
    
    console.log(string);

    rl.close()
})