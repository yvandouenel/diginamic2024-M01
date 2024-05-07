// Récupération de la référence du bouton modale
const buttonModale = document.getElementById("btn-modal");

// Gestion de l'événement clic sur le bouton
buttonModale.onclick = function (event) {
  console.log(`bouton modale cliqué`);
  // récupération de l'id de la modale via data-target via getAttribute par exemple

  // Afficher l'élément du DOM correspondant à l'id récupérée
}

// Récupération de la référence de l'élément du dom correspondant à la modale


// Gestion de l'événement clic sur la modale (soit sur la modale en elle-même, soit sur un élément compris dans la modale). On utilise pour cela event.target.