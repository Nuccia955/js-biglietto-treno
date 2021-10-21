// TASK CALC TRAIN TICKET PRICE

// 1. ask user km to do
const km = parseInt( prompt("Digit the number of km you have to do"));

// 2. ask user age
const age = parseInt( prompt("Digit your age (numeral type)"));

// 3. calculate standard price
const standard_price = km * 0.21;

// 4. declaration final price
let final_price;

// 5. calculate price for < 18
if (age < 18) {
    final_price = standard_price - ((standard_price * 20) / 100);
}

// 6. calculate price for >= 65
else if (age >= 65) {
    final_price = standard_price - ((standard_price * 40) / 100);
}

// 7. calculate price for  18 < age < 65
else {
    final_price = standard_price;
}

// 8. video print result
document.getElementById("ticket_price").innerHTML = `The price of your ticket is ${final_price.toFixed(2)}€`;