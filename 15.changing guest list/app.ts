 let guestlist:string[ ] = ["Anaya","Asma","Ayat"];
 //print the name who cant make dinner
 let unableAttend:string = guestlist.splice(1,1)[0];
 console.log(`${unableAttend} not invited for dinner`);
 //push
 guestlist.push("Rimsha");
 //print a message
 guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cardially invited.`);
    
 });


