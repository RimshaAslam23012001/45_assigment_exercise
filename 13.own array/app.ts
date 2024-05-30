let transportationMode: string[] = ["car","motorcycle","bicycle","bus"];
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would to own a ${transportationMode[i]}`);   
}
//foreach
transportationMode.forEach(mode => {
    console.log(`I would like to own ${mode}`);    
});