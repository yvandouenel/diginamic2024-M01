import FetchUniv from "./services/FetchUniv.js";
import { createMarkup } from "./utils/tools.js";
import Univ from "./components/Univ.js";

let univs = [];

// Récupération d'une référence au formulaire de choix du pays
const formCountries = document.getElementById("form-countries");

const sectionError = createMarkup("section", document.body, "", { "class": "container" });


// Eléments du dom pour filtrer
const sectionFilter = createMarkup("section", document.body, "", { "class": "container mt-2" });
const labelFilter = createMarkup("label", sectionFilter, "Filtrer les résultats : ", { "class": "me-2" });
const inputFilter = createMarkup("input", sectionFilter, "", { "type": "text", "class": "ml-2" });
sectionFilter.hidden = true;

// gestion de l'événement input sur l'input de filtrage
inputFilter.addEventListener("input", function (e) {
  console.log(`input`);
  const inputValue = e.target.value;
  if (inputValue.length > 2) {
    generateUnivs(univs.filter((univ) => univ.name.toLowerCase().includes(inputValue.toLowerCase())));
  }
  else {
    generateUnivs(univs);
  }
})

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
    univs = await FetchUniv.loadUnivs(countrie);
    sectionFilter.hidden = false;
    inputFilter.value = "";
    console.log(`univs`, univs);

    generateUnivs(univs);

  } catch (error) {
    console.error("Erreur attrapée : ", error);
    showError(`Une erreur est survenue lors de la récupération des données : ${error}`);
  }
})

function generateUnivs(univs) {
  // Suppression des éventuels éléments du DOM enfants de sectionUnivs
  sectionUnivs.innerHTML = "";

  const nbUnivs = createMarkup("p", sectionUnivs, `${univs.length} résultats`);
  // génération des éléments du dom via la class Univ
  const wrapperUniv = createMarkup("div", sectionUnivs, "", { "class": "row" });
  univs.forEach(univ => {
    new Univ(univ.name, univ?.domains[0], wrapperUniv);
  })
}
/**
 * Affiche temporairement une erreur 
 * @param {String} error 
 */
function showError(error) {
  const errorMsg = createMarkup("p", sectionError, error, { "class": "text-white bg-secondary mt-3 float-end w-25 p-3 rounded" });
  const animation = [
    { fontSize: "100%" },
    { fontSize: "110%" },
    { fontSize: "100%", offset: 0.3 },
    { fontSize: "100%", offset: 0.9 },
    { opacity: "0" },
  ];

  const animationTiming = {
    duration: 10000,
    iterations: 1,
  };
  errorMsg.animate(animation, animationTiming);
  setTimeout(() => {
    sectionError.innerHTML = ""
  }, 10000)
}