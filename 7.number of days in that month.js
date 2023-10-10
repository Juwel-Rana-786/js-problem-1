let month = 2
let year = 2001

let feb = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? 29 : 28;

if (month <= 12 && month > 0) {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        console.log("Number of days in your month : 31 days")
    }
    else if (month == 2) {
        console.log(`Number of days in your month : ${feb} days`)
    }
    else {
        console.log("Number of days in your month : 30 days")
    }
}

else {
    console.log("enter a valid month")
}
