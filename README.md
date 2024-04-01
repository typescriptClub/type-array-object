# Variable est typage

## Variable 

- let : Utilisé pour déclarer une variable dont la valeur peut être modifiée par la suite. La portée d'une variable déclarée avec "let" est limitée au bloc dans lequel elle est définie.

- const : Utilisé pour déclarer une variable dont la valeur ne peut pas être modifiée après son initialisation. Les variables déclarées avec "const" doivent être initialisées lors de leur déclaration et ne peuvent pas être réaffectées par la suite. La portée d'une variable "const" est également limitée au bloc dans lequel elle est définie.

- var : Il s'agit d'une ancienne façon de déclarer des variables en JavaScript. Les variables déclarées avec "var" ont une portée de fonction ou une portée globale, ce qui signifie qu'elles sont visibles dans la fonction où elles sont déclarées ou globalement si elles sont déclarées en dehors de toute fonction. Cependant, elles peuvent poser des problèmes en raison de leur comportement de hoisting et de leur portée moins prévisible, c'est pourquoi leur utilisation est déconseillée en faveur de "let" et "const".

Il est recommandé d'utiliser "let" pour les variables dont la valeur est susceptible de changer et "const" pour celles dont la valeur doit rester constante. Cela rend le code plus clair, plus prévisible et moins sujet aux erreurs.

- let/const : type
Example : 

```bash
const firstName: string = "Evelyn";
let age: number = 21;   
``` 
---

## Types

Typescript dispose des types primitifs suivants : "string", "number", "boolean", "null", "undefined", "symbol" et "bigint" pour typer une variable, il faut préciser son type après l'avoir déclarée.

Exemple :

```bash
const firstName: string = "Evelyn";
let age: number = 21;
let isTrue: boolean = false;
``` 

Le type bigint permet de manipuler une grande chaîne de nombres. Pour cela, il est possible d'utiliser le constructeur BigInt() ou d'ajouter un caractère n à la fin.

Exemple :

```bash
let salary = BigInt(156545652165451316548);
``` 

Pour utiliser BigInt(), décommentez "lib" dans le fichier tsconfig.json :


```bash 
"lib": ["es6","esnext.bigint"],
```
Décommentez "types" dans le fichier tsconfig.json pour :

```bash 
"types": ["node"]
```

Une fois cela fait, vous n'aurez plus d'erreurs au niveau de console.log(). Si vous rencontrez des erreurs liées à console, c'est parce que les types node ne sont pas installés. Pour cela, exécutez les commandes suivantes :

```bash 
npm init -y
npm install @types/node --save-dev
```


Avec cela, votre IDE ne devrait plus relever d'erreur.

Ce type primitif est très utilisé dans le contexte où il faut manipuler de grands nombres tout en conservant leur précision. Bien que le type bigint soit étroitement lié au type number, en TypeScript, ils ne sont pas assignables l'un à l'autre.

Exemple : 

```bash
let salary = BigInt(1000);
let salary1: number = 100;
```

- null / unknown

Nous verrons les deux types null ou unknown et leur différence.

```bash 
let name: null = null;
let ages: null = null;
let isHuman: unknown;

isHuman = true;
ages = 18; // Type '18' is not assignable to type 'null'
name = "Evelyne"; // Type '"Evelyne"' is not assignable to type 'null'
```

Les variables de type null ne peuvent attribuer après leur initialisation, elles seront considérées comme null. Contrairement au type unknown, si vous attendez une donnée que vous voulez stocker dans une variable et que vous ne connaissez pas la valeur, il est préférable de définir la variable en type unknown. Malgré tout, faites attention avec ce genre de déclaration, car son type peut changer.

Exemple : 

```bash 
let forTest: unknown;

forTest = true;
forTest = "Hello world";

console.log(forTest); // Hello world
```

---

## Tableaux et Types

Dans cette section, nous allons maintenant aborder les "arrays" ou tableaux, qui sont utilisés en TypeScript pour stocker des données et pouvoir interagir avec. Nous verrons l'interaction avec les tableaux plus tard. Nous allons nous concentrer sur les tableaux et leur typage.

- Le tableau de type "number"

Le tableau de type "number" n'acceptera que les chiffres et nombres.

Exemple :

```bash 
let ints: number[] = [0, 1, 2, 3, 4];
ints.push(5);

console.log(ints); // [ 0, 1, 2, 3, 4, 5 ]
```

Dans cet exemple, avec le tableau de type int, seuls les chiffres ou nombres seront acceptés. Si vous insérez autre chose, une erreur sera retournée.

Exemple :

```bash 
let ints: number[] = [0, 1, 2, 3, 4];
ints.push(5);
ints.push("hello world"); // Argument of type 'string' is not assignable to parameter of type 'number'

console.log(ints);
```

- Type string

Comme dans l'exemple de tableau précédent, le tableau de type string n'acceptera uniquement que les chaînes de caractères.

Exemple :

```bash 
let fruit: string[] = ["Banane", "Pomme", "Fraise"];

fruit.push("Kiwi");

console.log(fruit); // ["Banane", "Pomme", "Fraise", "Kiwi"]
```

Si un booléen ou un autre type que le type "string" est dans le tableau, une erreur sera retournée.

Exemple :

```bash 
let fruit: string[] = ["Banane", "Pomme", "Fraise"];

fruit.push(true);

console.log(fruit); // Argument of type 'boolean' is not assignable to parameter of type 'string'.ts(2345)

```

- Tableaux ordonnés

Les tableaux ordonnés sont des tableaux structurés avec des paramètres.
Exemple :
```bash 
[
    {id: 1, name:"typescriptClub", isTrue: True}
]
```

Ce type de tableau est beaucoup utilisé dans les API REST FULL en JSON. Par exemple, il est possible de les déclarer en les typant directement.

Exemple :

```bash
let user: Array<{id: number, name: string, lastName: string, age: number}> = [{id: 1, name: "Evelyne", lastName: "Dupont", age: 18}]

user.push({id: 2, name: "Louis", lastName: "Maury", age: 32});

console.log(user) 
/* [
    { id: 1, name: "Evelyne", lastName: "Dupont", age: 18 },
    { id: 2, name: "Louis", lastName: "Maury", age: 32 }    
] */
```

Comme pour les autres tableaux, dans le tableau ordonné, une fois que le type de donnée est initialisé (par exemple, "id" de type "number") et que vous essayez d'y insérer un type string, une erreur sera retournée.

- Les tableaux ordonnés sont des tableaux structurés avec un type "unknown"

Ce type de tableau n'a pas de schéma défini. Il peut être pratique dans certains cas lorsque vous ne savez pas quel type de données vous allez recevoir. Cependant, il est déconseillé de s'en servir car son architecture peut être modifiée à n'importe quel moment.

Exemple :

```bash 
let data: Array<unknown> = [{id:1, datas: "Lorem Ipsum", by: "Evelyne"}];
data.push({id:1, datas: "Lorem Ipsum", by: "Evelyne", to: "Louis" });

console.log(data)
/*
[
    { id: 1, datas: "Lorem Ipsum", by: "Evelyne" },
    { id: 1, datas: "Lorem Ipsum", by: "Evelyne", to: "Louis" }
]
*/
```
C'est pour cela qu'il est vivement déconseillé d'utiliser ce genre de typage dans des tableaux et d'essayer de se renseigner au maximum sur les données entrantes pour pouvoir les manipuler plus facilement.

---

## Object

Dans les langages de programmation orientés objet, il existe les objets. Les objets servent à stocker certaines informations, comme par exemple les informations sur un utilisateur, plutôt que de faire appel à un tableau ordonné. Nous allons créer un objet stockant les informations de l'utilisateur et les appeler quand nous en avons besoin. Il existe plusieurs façons de créer des objets et de les appeler. Nous verrons deux façons de créer un objet et deux façons d'appeler notre objet utilisateur.

Création de notre objet utilisateur :

```bash 
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
/*
{
    email: "email@gmail.com",
    name: "Evelyne",
    lastName: "Dupont",      
    age: 18,
    admin: false
}
*/
console.log(utilisateur.name); // Evelyne
```

Dans cet exemple, nous créons notre objet utilisateur et lui attribuons les valeurs de son email, de son nom, de son prénom, etc. Pour appeler l'objet en lui-même, nous utilisons :

```bash 
console.log(utilisateur);
```

Ce qui retourne :

```bash 
{
    email: "email@gmail.com",
    name: "Evelyne",
    lastName: "Dupont",      
    age: 18,
    admin: false
}

```

Ou si nous voulons une seule information :

```bash 
console.log(utilisateur.name); // Evelyne
```

Une autre méthode pour entrer des valeurs dans un objet est la suivante :

```bash 
const utilisateur1 = {
    email: "email@gmail.com",
    names: "Evelyne",
    lastNames: "Dupont",
    year: 18,
    admins: false
};

console.log(utilisateur1);
/*
{
    email: "email@gmail.com",
    names: "Evelyne",        
    lastNames: "Dupont",
    year: 18,
    admins: false
}
*/
console.log(utilisateur1.names); //Evelyne
```

Une autre méthode permettant d'accéder aux valeurs de nos objets est la suivante :

```bash 
const { email, name, lastName, age, admin } = utilisateur1;
console.log(email); // email@gmail.com
console.log(name); // Evelyne
console.log(lastName); // Dupont
console.log(age); // 18
console.log(admin); // false
```

Dans cette méthode, nous initialisons des variables à partir des propriétés de l'objet utilisateur1 en utilisant la déstructuration. Cela évite d'avoir à répéter utilisateur1. à chaque fois que nous voulons accéder à une propriété spécifique de l'objet. Cette approche rend le code plus lisible et facilite la gestion d'objets avec de nombreuses propriétés.