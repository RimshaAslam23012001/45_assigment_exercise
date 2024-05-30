let names: string[] =['mushk','fazeela','tanzeel','salika','musfira'];
//loop
//for each
//for loop
for (let i = 0; i< names.length; i++){
console.log(`hello, ${names[i]}! how are you today?`);
}
//for each
names.forEach(friend =>{
    console.log(`Hi, ${friend}! how are you today?`);
});

//for of loop
for(const friendName of names){
    console.log(`Dear, ${friendName}! how are you?`);
    
}