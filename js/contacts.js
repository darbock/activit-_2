console.log("Début du programme.")
// DECLARATION DU GESTIONNAIRE DE CONTACTS //
var activeDirectory = {
  init: function (nom,prenom) {
    this.nom = nom;
    this.prenom = prenom;
  },
  decrire: function () {
    var description = "Nom : " + this.nom + ", " + "Prénom : " + this.prenom;
    return description;
  }
}
// CONTACTS DEJA DANS LE TABLEAU //
var contact1 = Object.create(activeDirectory);
contact1.init("Lévisse", "Carole");
var contact2 = Object.create(activeDirectory);
contact2.init("Nelsonne", "Mélodie");
var contacts = [];
contacts.push(contact1);
contacts.push(contact2);

// DEBUT DU PROGRAMME //
console.log("Bienvenue sur votre gestionnaire de contacts.");
console.log("Veuillez choisir une option : ");
console.log("1 : Liste des contacts");
console.log("2 : Ajouter un nouveau contacts");
console.log("0 : Quitter");

// BOUCLE //
var choixUser = null;
while (choixUser != 0) {
  choixUser = Number(prompt("Veuillez choisir une option : "));
  if (choixUser == 1) {
    console.log("Voici la liste des contacts : ")
    contacts.forEach(function (activeDirectory) {
      console.log(activeDirectory.decrire());
    });
    console.log("Veuillez choisir une option : ");
    console.log("1 : Liste des contacts");
    console.log("2 : Ajouter un nouveau contacts");
    console.log("0 : Quitter");
  }

  // NOUVEAU CONTACT //
  if (choixUser == 2) {
    var nomNew = prompt("Entrer le NOM du nouveau contacts");
    var prenomNew = prompt("Entrer le PRENOM du nouveau contact");
    var contact3 = Object.create(activeDirectory);
    contact3.init(nomNew, prenomNew);
    contacts.push(contact3);
    console.log("Le nouveau contact à été créer avec succès ! ")
    console.log("Voici la liste des contacts mise à jour : ")
    contacts.forEach(function (activeDirectory) {
      console.log(activeDirectory.decrire());
    });
    console.log("Veuillez choisir une option : ");
    console.log("1 : Liste des contacts");
    console.log("2 : Ajouter un nouveau contact");
    console.log("0 : Quitter");    
  }

}

// FIN DU PROGRAMME //
if (choixUser == 0) {
  console.log("Merci d'avoir utilisé notre gestionnaire de contact");
  console.log("Passer une bonne journée, et attention à la marche en sortant !");
  console.log("By DBK")
  console.log("Fin du programme.");
}
