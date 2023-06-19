import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

rl.question('Input score: ', (score)=>{

    let grade = '';

    if(parseFloat(score)>=80){
        grade = "A"
    }else if(parseFloat(score)>=70){
        grade = "B"
    }else if(parseFloat(score)>=60){
        grade = "C"
    }else if(parseFloat(score)>=50){
        grade = "D"
    }else{
        grade = "F"
    }

    console.log(`Your grade is ${grade}.`)
    rl.close();
})