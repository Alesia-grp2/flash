/*
 * PAQUET DE CARTES — fichier généré par tableur_vers_cartes.py.
 * Ne pas modifier à la main : modifie le tableur, puis relance le script.
 *
 *  - "id" est unique et ne doit JAMAIS changer une fois la carte diffusée
 *    (il permet de conserver la progression des élèves).
 *  - "lecon" regroupe les cartes dans la liste proposée aux élèves.
 *  - "exemples" : toutes les phrases sont affichées avec la réponse. Le mot à trouver (ou sa forme
 *    fléchie ou conjuguée) y est placé entre crochets : « Nous avons [emménagé] en septembre. ».
 *    Dans l'exercice « définition → mot », la première phrase contenant des crochets est proposée
 *    à compléter (le mot est remplacé par un blanc) ; les crochets ne sont jamais affichés ni lus.
 *    Sans crochets, aucune phrase n'est proposée dans cet exercice.
 *  - "audio" (facultatif) : fichier mp3 ; sinon la voix de l'appareil lit le mot.
 *  - "version" augmente automatiquement quand le contenu change.
 */
window.PAQUET = {
  id: "francais-vocabulaire",
  titre: "Vocabulaire de français",
  version: 3,
  cartes: [
    // ---------- Leçon 1 — Lundi 9/11/2026 ----------
    {
      id: "L1-01",
      lecon: "Leçon 1 — Lundi 9/11/2026",
      mot: "flatté",
      definition: "Content et fier parce qu'on a reçu un compliment ou une marque d'estime.",
      exemples: ["Elle était [flattée] que son directeur pense à elle pour ce projet.", "Je suis très [flatté] de votre invitation, mais je ne pourrai pas venir."]
    },
    {
      id: "L1-02",
      lecon: "Leçon 1 — Lundi 9/11/2026",
      mot: "privé",
      definition: "Qui n'est pas ouvert à tout le monde et qui concerne seulement une personne ou un petit groupe.",
      exemples: ["Je ne parle jamais de ma vie [privée] avec mes collègues.", "Cette plage est [privée] : il faut une autorisation pour y entrer."]
    },
    {
      id: "L1-03",
      lecon: "Leçon 1 — Lundi 9/11/2026",
      mot: "volontiers",
      definition: "Avec plaisir, de bon cœur, sans hésiter.",
      exemples: ["Tu veux un café ? — [Volontiers], merci !", "Elle aide [volontiers] ses voisins quand ils ont besoin d'un service."]
    },
    {
      id: "L1-04",
      lecon: "Leçon 1 — Lundi 9/11/2026",
      mot: "intime",
      definition: "Qui concerne la vie personnelle et les sentiments les plus profonds, qu'on garde pour soi ou pour très peu de personnes.",
      exemples: ["Il a écrit dans son journal ses pensées les plus [intimes].", "Ils ont organisé une cérémonie [intime], avec seulement la famille proche."]
    },
    {
      id: "L1-05",
      lecon: "Leçon 1 — Lundi 9/11/2026",
      mot: "embêter",
      definition: "Déranger quelqu'un ou lui causer des petits problèmes, de façon agaçante.",
      exemples: ["Ça t’[embêterais] de me prêter ta voiture ?", "Arrête d'[embêter] ta sœur, elle essaie de travailler !"]
    }
  ]
};
