var guestlist = ["Anaya", "Ayat", "Asma"];
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 guest");
guestlist.unshift("servent", "Boss");
console.log("updated list of guest:", guestlist);
//remove guest from the list
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log("sorry, ".concat(removedGuest, ", we cant invite you"));
    }
}
//print a message for remainig guest
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you both are invited for the dinner."));
});
//remove 2 names from the list
//splice
guestlist.splice(0, guestlist.length);
console.log("Update list of guest:", guestlist);
