const fs = require("fs");
fs.readFile("./Geography.json", "utf8", (err, jsonString) => {
    console.log("File data:", JSON.parse(jsonString));
    let aman = JSON.parse(jsonString);
    let countries = [];
    let stateArray = [];
    let cityArray = [];
    aman.forEach(element => {
        countries.push({
            "name": element.name,
            "id": element.id
        });
        stateArray = [];
        element.states.forEach(element1 => {
            stateArray.push({
                "name": element1.name,
                "id": element1.id
            });
            cityArray = [];
            element1.cities.forEach(element2 => cityArray.push({
                "name": element2.name,
                "id": element2.id
            }));
            fs.writeFile("./cities/" + element.id + "_" + element1.id + ".json", JSON.stringify(stateArray), (e) => console.log(e));


        })
        fs.writeFile("./states/" + element.id + ".json", JSON.stringify(stateArray), (e) => console.log(e));
    });

    fs.writeFile("./allCountries.json", JSON.stringify(countries), (e) => console.log(e));
    console.log(countries);
});