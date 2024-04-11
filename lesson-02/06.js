let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let passportWithAddressDeepCopy={
    ...passportWithAddress,
    address: {...passportWithAddress.address, city: 'Bobryisk'}
}
console.log(passportWithAddress.address.city)
console.log(passportWithAddressDeepCopy.address.city)