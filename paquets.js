/*
 * LISTE DES JEUX DE CARTES proposés dans l'application.
 *  - "fichier" : nom du fichier produit par le script (python3 tableur_vers_cartes.py ... -o cartes-b2.js)
 *  - "titre"   : nom affiché dans le choix et dans la bannière
 * Pour ajouter un jeu : ajoute une ligne, dépose le fichier et celui-ci sur GitHub.
 * Si ce fichier est absent, l'application charge simplement cartes.js.
 * Le premier jeu est celui qui n'a pas encore été choisi : l'élève choisit au premier lancement.
 */
window.LISTE_PAQUETS = [
  { fichier: "cartes.js", titre: "Vocabulaire de français" }
  { fichier: "cartes-grpe2-2026-2027.js", titre: "Vocabulaire Groupe 2 2026-2027" } 
];
