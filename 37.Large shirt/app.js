"use strict";
function make_shirt(size = "large", printMessage = "I love typescript") {
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I am a developer");