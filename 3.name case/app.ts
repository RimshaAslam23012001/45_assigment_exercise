//RIMSHA UPPERCASE
//rimsha lower case
//Rimsha title case
let personName: string ="Rimsha"

console.log("lowercase:", personName.toLowerCase());

console.log("uppercase:", personName.toUpperCase());

console.log("titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));


