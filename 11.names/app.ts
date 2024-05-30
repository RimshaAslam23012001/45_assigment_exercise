let names: string[] =['mushk','fazeela','tanzeel','salika','musfira'];
//loop
//for each
//for loop
for (let i = 0; i< names.length; i++){
console.log(names[i]);
}
//for each
names.forEach(friend =>{
    console.log(friend);
})

//for of loop
for(const friendName of names){
    console.log(friendName);
    
}
