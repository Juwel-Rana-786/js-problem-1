let unit = 250;
let amount = 0
let vat = 55

if (unit > 0 && unit <= 50) {
    amount = (unit * 0.5) + vat

} else if (unit <= 150) {

    amount = 25 + ((unit - 50) * .75) + vat
}
else if (unit <= 250) {
    amount = 100 + ((unit - 100) * 1.20) + vat
}
else if (unit > 250) {
    amount = 280 + ((unit - 250) * 1.5) + vat
}

console.log(amount)


