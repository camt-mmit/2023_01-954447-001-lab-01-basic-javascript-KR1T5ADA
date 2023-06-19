import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

rl.question('Input size: ', (size) => {
    let string = "";
    
    for (let i = 0; i < size; i++) {
      if (i === 0 || i === size - 1) {
        for (let j = 0; j < size; j++) {
          string += "*";
        }
      } else {
        string += "*";
        for (let j = 0; j < size - 2; j++) {
          string += " ";
        }
        string += "*";
      }
      
      string += "\n";
    }
    
    console.log(string);
    rl.close();
  });