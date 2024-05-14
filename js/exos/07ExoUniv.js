import FetchUniv from "./services/FetchUniv.js";
import { createMarkup } from "./utils/tools.js";
import Univ from "./components/Univ.js";

// Récupération d'une référence au formulaire de choix du pays
const formCountries = document.getElementById("form-countries");

const sectionError = createMarkup("section", document.body, "", { "class": "container" });

const sectionUnivs = createMarkup("section", document.body, "", { "class": "container" });


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

    // Suppression des éventuels éléments du DOM enfants de sectionUnivs
    sectionUnivs.innerHTML = "";

    // génération des éléments du dom via la class Univ
    const wrapperUniv = createMarkup("div", sectionUnivs, "", { "class": "row" });
    univs.forEach(univ => {
      new Univ(univ.name, univ?.domains[0], wrapperUniv);
    })
  } catch (error) {
    console.error("Erreur attrapée : ", error);
    showError(`Une erreur est survenue lors de la récupération des données : ${error}`);
  }
})
/**
 * Affiche temporairement une erreur 
 * @param {String} error 
 */
function showError(error) {
  const errorMsg = createMarkup("p", sectionError, error, { "class": "text-danger" });
  const animation = [
    { fontSize: "100%" },
    { fontSize: "300%" },
    { fontSize: "100%" },
  ];

  const animationTiming = {
    duration: 2000,
    iterations: 1,
  };
  errorMsg.animate(animation, animationTiming);
  setTimeout(() => {
    sectionError.innerHTML = ""
  }, 3000)
}