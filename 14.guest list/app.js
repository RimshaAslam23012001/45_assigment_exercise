//Define array of guest
var guestList = ["Ayat", "Asma", "Anaya"];
//Invite each guest for dinner
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are cardially invited to dinner."));
});
//map()
//invite guest 
var invitation = guestList.map(function (guest) { return "Dear ".concat(guest, ", you are cardially invite to dinner"); });
console.log(invitation);
invitation.forEach(function (invitations) {
    console.log(invitations);
});
