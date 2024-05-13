import FetchUniv from "./services/FetchUniv.js";
// Récupération d'une référence au formulaire de choix du pays
const formCountries = document.getElementById("form-countries");

// Gestion de la validation du formulaire
formCountries.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Récupération des données envoyées par le formulaire
  const dataForm = new FormData(formCountries);

  const countrie = dataForm.get("countries");
  console.log(`countrie`, countrie);

  // Appel du service pour récupérer le retour de la requête http via fetch
  try {
    const univs = await FetchUniv.loadUnivs(countrie);
    console.log(`univs`, univs);
  } catch (error) {
    console.error("Erreur attrapée : ", error)
  }
})