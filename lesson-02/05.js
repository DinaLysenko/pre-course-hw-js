let passport = {
    name: "Petr",
    surname: "Petrov",
};
let passportCopy = {
    ...passport,
    name: "Ivan"
}
console.log(passport.name)
console.log(passportCopy.name)