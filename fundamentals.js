const aCar = {
    owner : "Joe Bloggs",
    // type : 'Toyota Corolla 1.8',
    type : {
        make : 'Toyota',
        model : 'Corolla',
        cc :1.8
    },
    registration : '201WD1058'
};

console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make);