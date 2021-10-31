const age = 26;
const isFemale = true;
const driverStatus = 'bob';
const firstName = "wouter";
const totalAmount = 50;

if (age > 18) {
    console.log("jij bent ouder dan 18 jaar! Kom binnen!");
} else if (age == 18) {
    console.log("jij bent 18 jaar, kom maar binnen");
} else if (age < 18) {
    console.log("jij bent jonger dan 18 jaar, je mag helaas niet naar binnen");
}

if (age >= 18 && age <= 25) {
    console.log("je krijgt 50% korting!");
} else {
    console.log("je krijgt een gratis zakje nootjes");
}

if (firstName == "Sarah" || firstName == "Bram") {
    console.log("hoera, jij krijgt een gratis biertje!");
} else {
    console.log("jammer, geen gratis biertje voor jou");
}

if (isFemale) {
    console.log("zij is een vrouw");
}
else {                      //je kunt hier enkel "else" gebruiken omdat er maar 2 waarden mogelijk zijn
    console.log("zij is geen vrouw");
}

if (driverStatus == 'bob') {
    console.log("hij/zij is de bob en mag dus rijden");
}
else {
    console.log("hij/zij is niet de bob en mag dus NIET rijden!");
}

if (totalAmount > 25 && totalAmount < 50) {
    console.log("hoera, jij krijgt gratis bitterballen!");
} else if (totalAmount => 50 && totalAmount < 100) {
    console.log("hoera, jij krijgt een gratis portie nachos!");
} else if (totalAmount => 100) {
    console.log("hoera, jij krijgt een gratis fles champagne!!");
}
