let unit = 10;
let amount = 0

if (unit > 0 && unit <= 50) {
    amount = (unit * 0.5) + 55

} else if (unit > 50 && unit <= 100) {

    amount = 25 + ((unit - 50) * .75) + 55
}
else if (unit > 100 && unit <= 250) {
    amount = 62.5 + ((unit - 100) * 1.20) + 55
}
else if (unit > 250) {
    amount = 242.5 + ((unit - 250) * 1.5) + 55
}

console.log(amount)

