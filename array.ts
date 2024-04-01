// 
// Array type number
// 

let int: number[];

int = [0, 1, 2, 3, 4];
int.push(5);

console.log(int);

// Simplification de l'initialisation du tableau de type number

let ints: number[] = [0, 1, 2, 3, 4];
ints.push(5);

console.log(ints);


// 
// Array type string
// 

let fruit: string[] = ["Banane", "Pomme", "Fraise"];

fruit.push("Kiwi");

console.log(fruit);

// 
// Array ordonnée 
//

let user: Array<{id: number, name: string, lastName: string, age: number}> = [{id: 1, name: "Evelyne", lastName: "Dupont", age: 18}]

user.push({id: 2, name: "Louis", lastName: "Maury", age: 32});

console.log(user)

let data: Array<unknown> = [ {id:1, datas: "Lorem Ipsum", by: "Evelyne"} ];

data.push({id:1, datas: "Lorem Ipsum", by: "Evelyne", to: "Louis" });

console.log(data)