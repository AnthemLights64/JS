const aCar = {
    owner : "Joe Bloggs",
    // previous_owners: [
    //     "Pat Smith - 1 Main Street",
    //     "Sheila Dwyer - 2 High Street"
    // ],
    previous_owners: [
        { name: "Pat Smith", address: "1 Main Street" },
        { name: "Sheila Dwyer", address: "2 High Street" }
    ],
    // type : 'Toyota Corolla 1.8',
    type : {
        make : 'Toyota',
        model : 'Corolla',
        cc :1.8
    },
    //registration : '201WD1058'
    registration : { year: 201, county: "WD", number: 1058}
};

console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log(
    "Reg.=" +
        aCar.registration.year +
        "-" +
        aCar.registration.county +
        "-" +
        aCar.registration.number
);

aCar.milage = 10000
aCar.color = {
    exterior: "red",
    interior: {texture: "leather", shade: "cream"}
}

console.log(
    "It is a " +
        aCar.color.exterior + 
        " car, " + 
        aCar.milage +
        " milage, with " + 
        aCar.color.interior.texture + 
        " interior."
);

//console.log('First owner : ' + aCar.previous_owners[0]);

console.log(
    "First owner: " +
        aCar.previous_owners[0].name +
        ' - ' + 
        aCar.previous_owners[0].address
);