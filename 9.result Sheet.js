// result sheet 



// let result = parseInt(prompt(Enter your result ))

let result = 23

if (result > 0 && result < 33) {
    console.log("Your great is F , Your are failed !  ");
}
else if (result >= 33 && result < 50) {
    console.log('Your great is D');
}
else if (result >= 50 && result < 60) {
    console.log('Your great is C');
}
else if (result >= 60 && result < 65) {
    console.log('Your great is B');
}
else if (result >= 65 && result < 70) {
    console.log('Your great is A-');
}
else if (result >= 70 && result < 80) {
    console.log('Your great is A');
}
else if (result >= 80 && result <= 100) {
    console.log('Your great is A+');
}
else {
    console.log("Enter valid Number")
}


