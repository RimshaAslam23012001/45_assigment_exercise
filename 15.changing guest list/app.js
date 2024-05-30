var guestlist = ["Anaya", "Asma", "Ayat"];
//print the name who cant make dinner
var unableAttend = guestlist.splice(1, 1)[0];
console.log("".concat(unableAttend, " not invited for dinner"));
//push
guestlist.push("Rimsha");
//print a message
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cardially invited."));
});
