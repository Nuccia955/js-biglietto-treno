// TASK CALC TRAIN TICKET PRICE

// 1. ask user km to do
//    -declaration const_ask value (convert value)
const km = parseInt( prompt("Digit the number of km you have to do"));
console.log(km);

// 2. ask user age
//    -declaration const_ask value (convert value)
const age = parseInt( prompt("Digit your age (numeral type)"));
console.log(age);

// 3. calculate standard price
//    -declaration const_km * 0.21€
const standard_price = km * 0.21;
console.log(standard_price);

// 4. declaration let final price
let final_price;

// 5. calculate price for < 18
//    -condition age < 18 --> final price=(standard price - ((standard price * 20) / 100))
if (age < 18) {
    final_price = standard_price - ((standard_price * 20) / 100);
}

// 6. calculate price for >= 65
//    -condition age > 65 --> final price=(standard price - ((standard price * 40) / 100))
else if (age >= 65) {
    final_price = standard_price - ((standard_price * 40) / 100);
}

// 7. calculate price for  18 < age < 65
//    -final price = standard price
else {
    final_price = standard_price;
}

console.log(final_price)

// 8. video print result 
//    -id selection_innerHtml final price
document.getElementById("ticket_price").innerHTML = `The price of your ticket is ${final_price.toFixed(2)}€`;