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
    ...passportMarried
}
console.log(passportMarried)
console.log(passportMarriedCopy)