let guestlist:string[] =["Anaya","Ayat","Rimsha"];
console.log("Great News! we found a bigger table");
//unshift
guestlist.unshift("Fazi");   //unshift use for adding name in starting point
//splice
guestlist.splice(Math.floor(guestlist.length/2),0,"Musfira");
//push();
guestlist.push("Mushk")
console.log(guestlist);

//forEach
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you all are cardially invited to dinner`);
    
})
//math.floor
// let num1: number = 9.99;
// let nums:number = Math.floor(num1/2)  //divide properly in simple letetr
// console.log(nums);
