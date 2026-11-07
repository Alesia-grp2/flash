/*
 * PAQUET DE CARTES — c'est le seul fichier à modifier au fil des leçons.
 *
 * Pour ajouter une carte : copier un bloc { ... } et changer son contenu.
 * Règles importantes :
 *  - "id" doit être unique et ne JAMAIS changer une fois la carte diffusée
 *    (c'est lui qui permet de conserver la progression des élèves).
 *  - "lecon" regroupe les cartes dans la liste proposée aux élèves.
 *  - "exemples" : une ou plusieurs phrases (la première sert pour le mode « définition → mot »).
 *  - "audio" (facultatif) : chemin d'un fichier mp3 enregistré, par ex. "audio/emmenager.mp3".
 *    S'il est absent, la voix de synthèse de l'appareil lit le mot.
 *  - Augmenter "version" à chaque mise à jour (simple repère affiché dans les réglages).
 */
window.PAQUET = {
  id: "francais-vocabulaire",
  titre: "Vocabulaire de français",
  version: 1,
  cartes: [
    // ---------- Leçon 1 ----------
    {
      id: "L1-01",
      lecon: "Leçon 1 — Le logement",
      mot: "emménager",
      definition: "S'installer dans un nouveau logement.",
      exemples: [
        "Nous avons emménagé dans notre nouvel appartement en septembre.",
        "Quand emménagez-vous dans votre maison ?"
      ]
    },
    {
      id: "L1-02",
      lecon: "Leçon 1 — Le logement",
      mot: "déménager",
      definition: "Quitter un logement pour aller habiter ailleurs.",
      exemples: [
        "Ma sœur déménage à Lyon le mois prochain.",
        "Il a fallu trois personnes pour déménager le piano."
      ]
    },
    {
      id: "L1-03",
      lecon: "Leçon 1 — Le logement",
      mot: "le loyer",
      definition: "Somme d'argent que l'on paie chaque mois pour habiter dans un logement qui appartient à quelqu'un d'autre.",
      exemples: [
        "Le loyer de mon studio augmente chaque année.",
        "Elle paie son loyer le premier du mois."
      ]
    },
    {
      id: "L1-04",
      lecon: "Leçon 1 — Le logement",
      mot: "un voisin",
      definition: "Personne qui habite près de chez vous.",
      exemples: [
        "Mon voisin du dessus joue de la guitare le soir.",
        "Les voisins se sont réunis pour fêter l'arrivée de l'été."
      ]
    },
    {
      id: "L1-05",
      lecon: "Leçon 1 — Le logement",
      mot: "spacieux",
      definition: "Qui offre beaucoup de place.",
      exemples: [
        "Le salon est très spacieux et lumineux.",
        "Nous cherchons un appartement plus spacieux."
      ]
    },
    {
      id: "L1-06",
      lecon: "Leçon 1 — Le logement",
      mot: "un ascenseur",
      definition: "Appareil qui permet de monter ou de descendre dans un immeuble sans prendre l'escalier.",
      exemples: [
        "L'ascenseur est en panne, il faut monter à pied.",
        "Je prends l'ascenseur jusqu'au sixième étage."
      ]
    },
    {
      id: "L1-07",
      lecon: "Leçon 1 — Le logement",
      mot: "un quartier",
      definition: "Partie d'une ville qui a son caractère et sa vie propres.",
      exemples: [
        "J'adore mon quartier : tout est à deux pas.",
        "Ce quartier est calme le dimanche."
      ]
    },

    // ---------- Leçon 2 ----------
    {
      id: "L2-01",
      lecon: "Leçon 2 — Qualités et défauts",
      mot: "ponctuel",
      definition: "Qui arrive toujours à l'heure.",
      exemples: [
        "Marc est très ponctuel : il n'est jamais en retard.",
        "Soyez ponctuels, le train ne nous attendra pas."
      ]
    },
    {
      id: "L2-02",
      lecon: "Leçon 2 — Qualités et défauts",
      mot: "têtu",
      definition: "Qui ne change jamais d'avis, même quand il a tort.",
      exemples: [
        "Mon frère est têtu comme une mule.",
        "Elle est trop têtue pour accepter de l'aide."
      ]
    },
    {
      id: "L2-03",
      lecon: "Leçon 2 — Qualités et défauts",
      mot: "généreux",
      definition: "Qui donne volontiers son temps, son argent ou son aide.",
      exemples: [
        "C'est un homme généreux qui aide tout le monde.",
        "Merci pour ce cadeau, c'est très généreux de ta part."
      ]
    },
    {
      id: "L2-04",
      lecon: "Leçon 2 — Qualités et défauts",
      mot: "se méfier",
      definition: "Ne pas faire confiance et rester prudent.",
      exemples: [
        "Méfie-toi des offres qui paraissent trop belles.",
        "Elle se méfie des inconnus."
      ]
    },
    {
      id: "L2-05",
      lecon: "Leçon 2 — Qualités et défauts",
      mot: "éphémère",
      definition: "Qui ne dure pas longtemps.",
      exemples: [
        "Le bonheur est parfois éphémère.",
        "Les fleurs de cerisier sont éphémères."
      ]
    },
    {
      id: "L2-06",
      lecon: "Leçon 2 — Qualités et défauts",
      mot: "discret",
      definition: "Qui ne se fait pas remarquer, ou qui ne raconte pas ce qui est privé.",
      exemples: [
        "Il est discret : il ne parle jamais de sa vie privée.",
        "Elle est entrée de façon très discrète."
      ]
    },
    {
      id: "L2-07",
      lecon: "Leçon 2 — Qualités et défauts",
      mot: "s'épanouir",
      definition: "Se développer pleinement et se sentir heureux.",
      exemples: [
        "Dans ce nouveau poste, elle s'épanouit enfin.",
        "Les enfants s'épanouissent quand on leur fait confiance."
      ]
    }
  ]
};
