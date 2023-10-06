let num1 = 123;
let num2 = 3252534;
let num3 = 4354353445;


let bigNumber = (num1 > num2 && num1 > num3) ?

    num1 : (num2 > num1 && num2 > num3) ?
        num2 : num3


console.log("bigNumber:", bigNumber)