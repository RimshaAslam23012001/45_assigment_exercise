var guestlist = ["Anaya", "Ayat", "Rimsha"];
console.log("Great News! we found a bigger table");
//unshift
guestlist.unshift("Fazi"); //unshift use for adding name in starting point
//splice
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Musfira");
//push();
guestlist.push("Mushk");
console.log(guestlist);
//forEach
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all are cardially invited to dinner"));
});
//math.floor
var num1 = 9.99;
var nums = Math.floor(num1);
console.log(nums);
