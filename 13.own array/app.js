var transportationMode = ["car", "motorcycle", "bicycle", "bus"];
for (var i = 0; i < transportationMode.length; i++) {
    console.log("I would to own a ".concat(transportationMode[i]));
}
//foreach
transportationMode.forEach(function (mode) {
    console.log("I would like to own ".concat(mode));
});
