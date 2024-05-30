var placeToVisit = ["Makkah", "Madina", "Dubai", "Turkey", "Paris"];
//print in original order
console.log("original order:", placeToVisit);
//print array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", placeToVisit.slice().sort());
//array is still in its original order by printing it
console.log("original order:", placeToVisit);
//print array in reverse alphabetical order without changing in order of the list
console.log("reverse order:", placeToVisit.slice().sort().reverse());
//array is still in its original order by printing it again
console.log("original order:", placeToVisit);
//reverse the order of your list. print the array to show that its order has changed
console.log("reverse order changed");
placeToVisit.reverse();
console.log(placeToVisit);
//reverse the order of yiur list again.print the list to show it back in its orignal order
console.log("original order:", placeToVisit.sort());
console.log(placeToVisit);
//sort to change  your array so its, stored alphabetical order. print the list to show that its order has been changed
console.log("reverse alphabetical order changed:", placeToVisit.sort().reverse());
console.log(placeToVisit);
