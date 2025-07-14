 const prenom = "Bouba";
let ageo = 30;

console.log("Salut, je m'appelle " + prenom + " et j'ai " + age + " ans.");

if (age > 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}

let nom = "Oumar";
age = 25;
let ville = "Télimélé";
console.log("Nom : " + nom);
console.log("Âge : " + age);
console.log("Ville : " + ville);




let prenomm = "Fode Momo Soumah";
let agea = 21;
let villea = "Labé";
let metier = "développeur";
let passion = "le codage";

let phrase1 = `Bonjour, je m'appelle ${prenom}, j'ai ${age} ans, je vis à ${ville}, je suis ${metier} et j'aime ${passion}.`;
console.log("Méthode 1 :", phrase1);


let phrase2 = "Bonjour, je m'appelle " + prenom + ", j'ai " + age + " ans, je vis à " + ville + ", je suis " + metier + " et j'aime " + passion + ".";
console.log("Méthode 2 :", phrase2);


let phrase3 = "Bonjour, je suis ".concat(prenom, ", j'ai ", age, " ans, je vis à ", ville, ", je suis ", metier, " et ma passion est ", passion, ".");
console.log("Méthode 3 :", phrase3);



let phraseElements = [
  "Bonjour je m'appelle", prenom,
  "j'ai", age, "ans,",
  "je vis à", ville + ",",
  "je suis", metier,
  "et j'aime", passion + "."
];

let phrase4 = phraseElements.join(" ");
console.log("Méthode 4 :", phrase4);



// Exemple de code JavaScript pour les opérateurs arithmétiques
let a = 10;
let b = 3;

// Somme
let somme = a + b;
console.log("Somme (a + b) = " + somme);           

// Soustraction
let difference = a - b;
console.log("Soustraction (a - b) = " + difference); 

// Multiplication
let produit = a * b;
console.log("Multiplication (a * b) = " + produit);  

// Modulo (reste de la division)
let reste = a % b;
console.log("Modulo (a % b) = " + reste);           

// Puissance (a élevé à la puissance de b)
let puissance = a ** b;
console.log("Puissance (a ** b) = " + puissance);  


// Exemple de code JavaScript pour les opérateurs de comparaison

let x = 5;
let y = "5";
let z = 3;

// Égalité simple (==)
console.log("x == y :", x == y);     

// Égalité stricte (===)
console.log("x === y :", x === y);   

// Différence simple (!=)
console.log("x != y :", x != y);     

// Différence stricte (!==)
console.log("x !== y :", x !== y);  


// Supérieur à (>)
console.log("x > z :", x > z);   

// Inférieur à (<)
console.log("x < y :", x < z);   

// Supérieur ou égal à (>=)
console.log("x >= y :", x >= z);  

// Inférieur ou égal à (<=)
console.log("x <= 5 :", x <= 5);  

// Exemple de code JavaScript pour les opérateurs logiques
let a1 = true;
let b1 = false;
// ET logique (&&)
console.log("a1 && b1 :", a1 && b1); // false
// OU logique (||)
console.log("a1 || b1 :", a1 || b1); // true
// NON logique (!)
console.log("!a1 :", !a1); // false
// Exemple de code JavaScript pour les opérateurs d'affectation
let N = 7;
// Affectation avec addition
N += 3; // N = N + 3
console.log("Affectation avec addition, N =", N); // 10
// Affectation avec soustraction
N -= 2; // N = N - 2
console.log("Affectation avec soustraction, N =", N); // 8
// Affectation avec multiplication
N *= 4; // N = N * 4
console.log("Affectation avec multiplication, N =", N); // 32
// Affectation avec division
N /= 2; // N = N / 2
console.log("Affectation avec division, N =", N); // 16
// Affectation avec modulo
N %= 5; // N = N % 5
console.log("Affectation avec modulo, N =", N); // 1
// Exemple de code JavaScript pour les opérateurs  ternaire
let age = 20;
let statut = (age >= 18) ? "Majeur" : "Mineur";
console.log(statut); // "Majeur"
// Exemple de code JavaScript pour les structures de contrôle 
// Condition if,else if et else
let ageb = 17;

if (ageb >= 18) {
  console.log("Majeur");
} else if (ageb >= 13) {
  console.log("Adolescent");
} else {
  console.log("Enfant");
}


let agec = 20;
let pays = "guinee";  

if (agec >= 18) {
  // Vérifie si le pays est dans la liste autorisée
  if (pays === "France" || pays === "Canada" || pays === "Senegal") {
    console.log("Inscription autorisée");
  } else {
    console.log("Inscription refusée : pays non autorisé");
  }
} else {
  console.log("Inscription refusée : trop jeune");
}
// exemple de code JavaScript pour la structure switch

let jour = 3;

switch (jour) {
  case 1:
    console.log("Lundi");
    break;
  case 2:
    console.log("Mardi");
    break;
  case 3:
    console.log("Mercredi");
    break;
  case 4:
    console.log("Jeudi");
    break;
  case 5:
    console.log("Vendredi");
    break;
  case 6:
    console.log("Samedi");
    break;
  case 7:
    console.log("Dimanche");
    break;
  default:
    console.log("Jour invalide");
}
// Exemple de code JavaScript pour les boucles
// Boucle for
for (let i = 1; i < 5; i++) {
  console.log("nombreF:" + i);
}
// Boucle while
let j = 0;
while (j < 3) {
  console.log("NombreW:" + j);
  j++;
}
// Boucle do...while
let k = 0;
do {
  console.log("NombreDW" + k);
  k++;
} while (k < 3); 
// boucle for...of
let prenoms = ["Boubacar", "Amadou", "Oumou", "Djenaba"];

for (let prenom of prenoms) {
  console.log("Bonjour " + prenom);
}
// boucle for...in
const user = { nom: "Diallo", age: 25, role: "étudiant" };

for (let cle in user) {
  console.log(cle + " : " + user[cle]);
}
// boucle forEach
prenoms.forEach(function(prenom, index) {
  console.log("Bonjour " + prenom);
});

// Exemple de code JavaScript pour les fonctions
// Déclaration de la fonction
function saluer(nom, prenom) {
  console.log("Bonjour " + nom + " " + prenom);
}

// Appels de la fonction avec des arguments différents
saluer("Bah", "Oumar");
saluer("Diallo", "Fatoumata");
saluer("Camara", "Mamadou");
saluer("Barry", "Aissatou");
saluer("Kourouma", "Alpha");

const monAge = () => {
  console.log("J'ai 20 ans");
};

// Appel de la fonction
monAge();


function nom() {
  let z = "Oumar";
  if (z === "Oumar") {
    console.log("Bienvenue Oumar !");
  } else {
    console.log("Ce n'est pas ton nom !");
  }
}

// Appel de la fonction
nom();






