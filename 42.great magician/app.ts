function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`);
}
let magician_names = ["Herry poter", "Jack", "John"];
let great_magicians =make_great(magician_names);
show_magicians(great_magicians);