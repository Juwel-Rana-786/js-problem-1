let year = 2001
let day = 13
let month = 2
let totalDays = 0;





let feb = (year % 4 == 0) ? 29 : 28;


switch (month) {
    case 1:
        console.log("total day", day)
        break;
    case 2:
        console.log("total day", 31 + day)
        break;
    case 3:
        console.log("total day", 31 + feb + day)
        break;
    case 4:
        console.log("total day", 31 + feb + 31 + day)
        break;
    case 5:
        console.log("total day", 31 + feb + 31 + 30 + day)
        break;
    case 6:
        console.log("total day", 31 + feb + 31 + 30 + 31 + day)
        break;
    case 7:
        console.log("total day", 31 + feb + 31 + 30 + 31 + 30 + day)
        break;
    case 8:
        console.log("total day", 31 + feb + 31 + 30 + 31 + 30 + 31 + day)
        break;
    case 9:
        console.log("total day", 31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + day)
        break;
    case 10:
        console.log("total day", 31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + day)
        break;
    case 11:
        console.log("total day", 31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + day)
        break;
    case 12:
        console.log("total day", 31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + day)
        break;

    default:
        console.log("Enter a valid month or date ?")

        break;
}