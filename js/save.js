// NOUVEAU CONTACTS //
var nomNew = prompt("Entrer le nom du nouveau contacts");
var prenomNew = prompt("Entrer le prénom du nouveau contacts");
var contact3 = Object.create(activeDirectory);
contact3.init(nomNew, prenomNew);
contacts.push(contact3);
contacts.forEach(function (activeDirectory) {
  console.log(activeDirectory.decrire());
});

contacts.forEach(function (activeDirectory) {
  console.log(activeDirectory.decrire());
});
