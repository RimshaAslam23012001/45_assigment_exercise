// //they think of something you could store in a typescript object.
// //write aprogram that creates objects containig tehse items
// let student ={
//     name : "Rimsha",
//     rollnumber: 13,
//     grade:[85,90,75]
// };
// console.log(student.grade[2]);
// let products={
//     name:"latop",
//     price:8000,
//     description:"high performance laptop with fast processor"
// };
// console.log(products.price);
// //type interface
// interface person {
//     name:string;
//     age:number;
//     city: string;
// }
// let person1: person={
//     name:"john",
//     age:34,
//      city:"karachi"
// };
// let person2={
//     name:"kim",
//     age:23,
// city:"lahore"
// };
// console.log(person2.city);
//intial object
// let person ={
//     name:"kim",
//     age:23,
//     city:"karachi"
// };
// //update property
// person.age= 20;
// person.city="lahore";
// //add new property
// person["gender"]= "female";
// console.log(person);
var objectContainigItems = {
    "laptop": {
        name: "laptop",
        price: 8000,
        description: "high performance laptop with fast processor"
    },
    "mouse": {
        nmae: "mouse",
        price: 10000,
        description: "high performance laptop with fast processor"
    },
    "keyboard": {
        nmae: "keyboard",
        price: 5000,
        description: "high performance laptop with fast processor"
    },
};
console.log(objectContainigItems.keyboard);
