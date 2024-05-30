"use strict";
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with the following items\n");
    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("\nNow Enjoy Sandwich\n");
}
makeSandwich("chicken", "egg", "mayo", "salad");
makeSandwich("bread", "butter");
makeSandwich("chicken", "egg", "mayo", "salad", "bread", "butter");
