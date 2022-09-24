'use strict';
// 1- Pour commencer on va ajouter un eventListener au bouton qui va recuperer le valeur ajouté par le jouer.
// 2- Place à la fonction qui va enregistrer la valeur
// 2.1- Il ne faut pas oublier que les valeurs recupérés dans les inputs sont considérés comme des strings,
//      il faut ainsi les transformer em nombre avec le wrapper Number()
// 3- Quaund on clique dans le bouton vérifier et on a oubliè de ajouter la valeur, on doit pouvoir avertir 
//    l'utilisateur avec une message. Ici on va utiliser l'opérateur NON logique ( ! ) pour pouvoir récuperer
//    la message d'erreur
// 3.1 - Maintenant je veux ajouter le message quand j'ai le bon numero
// 3.2 - Quand il faut un plus petit
// 3.3 - Quand il faut un plus grand 
// 4- Maintenant il faut pouvoir générer un numéro aléatoire avec la fonction Math.random() qui va nous donner
//    un chiffre alléatoire entre 0 et 1
// 4.1 - Mais je veux un numéro entre 1 et 20 et pour cela il faut multiplier Math.random() * 20 + 1
//       parce que Math.random() génére uniquement entre 0 et 20 et le mieux q'on peut avoir c'est le 19.99999 
//       mais jamais le 20, c'est pour cela qu'on ajoute + 1.
// 4.2 - Je veux uniquement les numéros intières pour cela je vais envelopper le numéro aléatoire avec la fonction
//       Math.trunc(Math.random())
// 5- Chaque fois que le joeur essaye un numéro le compteur de points perd un point
// 5.1 - Apliquer le nouveau compteur au element .score
// 6- Quand le joueur arrive à 0 il doit recevoir une notification "Game Over à l'aide de l'instruction if...else
// 7- Je veux changer la couleur de fond de la app quand le jouer à trouvé le bon numéro, pour cela on va changer
//    le backgroundColor avec le document.querrySelector
// 7.1 - je veux aussi agrandir la "boite avec le bon numéro"
// 8- Integrer la fonctionnalité reset dans le jeux.
// 8.1 - Comencer par selectionner l'element avec la classe ".again" dans l'HTML et apliquer le "click" 
//       eventListener
// 9- Enregistrer le highscore, pour cela il faut créer une variable qui va enregistrer les resultats et après 
//    ajouter au code pour bien enregistrer les donnés

let secretNumber = Math.trunc(Math.random() * 20 + 1); // 4
let score = 20;
let highscore = 0;

// document.querySelector(".number").textContent = secretNumber;
// console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function() { // 1
    const guess = Number(document.querySelector(".guess").value); // 2

    // Pas de numéro
    if (!guess) { // 3
        document.querySelector(".message").textContent = "🛑 Tu as oublié le numéro" // 3
    // Bon numéro    
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 C'est le bon numéro !!!" // 3.1

        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347"; // 7

        document.querySelector(".number").style.width = "30rem"; // 7.1

        if (score > highscore) { // 9
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    // Numéro trop grand    
    } else if (guess > secretNumber) {
        if(score > 1 ) { // 6
            document.querySelector(".message").textContent = "👇 C'est moins !" // 3.2
            score = score - 1; // 5
            document.querySelector(".score").textContent = score; // 5.1
        } else { 
            document.querySelector(".message").textContent = "😈 Game Over 😈" // 6
            document.querySelector(".score").textContent = 0
        }
    // Numéro trop petit  
    } else if (guess < secretNumber) {
        if (score > 1 ) { // 6
            document.querySelector(".message").textContent = "☝ C'est plus !" // 3.3
            score--; // 5
            document.querySelector(".score").textContent = score; // 5.1
        } else {
            document.querySelector(".message").textContent = "😈 Game Over 😈" // 6
            document.querySelector(".score").textContent = 0
        }

    } 
}); 

document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".message").textContent = "Commencer à jouer..."
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?"
});