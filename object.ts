//
// Object
//

const utilisateur: {
    email: string;
    name: string;
    lastName: string;
    age: number;
    admin: boolean
} = {
    email : "email@gmail.com",
    name: "Evelyne",
    lastName: "Dupont",
    age: 18,
    admin: false
};

console.log(utilisateur);
console.log(utilisateur.name);

const utilisateur1 = {
    email: "email@gmail.com",
    names: "Evelyne",
    lastNames: "Dupont",
    year: 18,
    admins: false
};

console.log(utilisateur1);
console.log(utilisateur1.names);

const {email, names, lastNames, year, admins} = utilisateur1;
console.log(email);
console.log(names);
console.log(lastNames);
console.log(year);
console.log(admins);