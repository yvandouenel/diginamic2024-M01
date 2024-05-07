// Récupération de la référence du bouton modale
const buttonModale = document.getElementById("btn-modal");

// Gestion de l'événement clic sur le bouton
buttonModale.onclick = function (event) {
  console.log(`bouton modale cliqué`);
  // récupération de l'id de la modale via data-target
  const modalId = event.target.getAttribute("data-target");

  document.querySelector(modalId).style.display = "block";
}

// Récupération de la référence de l'élément du dom correspondant à la modale
const modaleElt = document.getElementById("exampleModalLive");


// Gestion de l'événement clic sur la modale (soit sur la modale en elle-même, soit sur un élément compris dans la modale). On utilise pour cela event.target.
modaleElt.onclick = function (e) {
  console.log(`click sur `, e.target.id);
  if (e.target?.id == "exampleModalLive" ||
    e.target.tagName === "BUTTON" ||
    e.target.tagName === "SPAN"
  ) modaleElt.style.display = "none";
}


