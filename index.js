const calculator = require("./calculator");
const readLineSync = require("readline-sync");


let answer;
let answer2;
let answer3;

while (answer!="exit") {

answer = readLineSync.question("Milyen muveletet akarsz vegrehajtani ?")


if (answer == "exit"){
    break;
}
answer2 = readLineSync.question("Mi az elso szam?")
answer3 = readLineSync.question("Mi a masodik szam?")


if (answer== "add"){
calculator.add();
const adding = calculator.add(Number(answer2),Number((answer3)));
    console.log(`${answer2} + ${answer3} = ${adding}`);
}

else if (answer== "subtract"){
calculator.subtract();
const sub = calculator.subtract(Number(answer2),Number((answer3)));
    console.log(`${answer2} - ${answer3} = ${sub}`);

} 
else if (answer== "multiply"){
calculator.multiply();
const multi = calculator.multiply(Number(answer2),Number((answer3)));
    console.log(`${answer2} * ${answer3} = ${multi}`);

}

else if (answer== "divide"){
calculator.divide();
const div = calculator.divide(Number(answer2),Number((answer3)));
    console.log(`${answer2} / ${answer3} = ${div}`);

}

}
