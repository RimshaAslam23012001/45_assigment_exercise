let userName = ["Arsalan", "Zia", "Gahyyas", "Admin", "Ruhul"];
userName.forEach(oneUser =>{
if(oneUser ===  "Admin"){
    console.log(`Hello ${oneUser}, would you like to see a status report ?`);
}else{
    console.log(`Hello ${oneUser}, thank you for log in again. `);
}
})