let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
let passportMarriedCopy={
    ...passportMarried,
    married: true
}
console.log(passportMarried)
console.log(passportMarriedCopy)