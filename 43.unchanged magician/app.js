"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The great ${name}`);
}
let magician_names = ["Herry poter", "Jack", "John"];
//making a copy of original array through .slice() functtion
let copy_magician_names = magician_names.slice();
let copy_great_magician = make_great(copy_magician_names);
console.log("original array\n");
show_magicians(magician_names);
console.log("\ncopied array\n");
show_magicians(copy_great_magician);
