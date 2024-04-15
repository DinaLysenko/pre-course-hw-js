let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
let passportMarriedCopy = {
    married: true,
    ...passportMarried,
    address: {...passportMarried.address}
}
console.log(passportMarried)
console.log(passportMarriedCopy)