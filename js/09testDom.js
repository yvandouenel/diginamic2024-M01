var i = 12;
window.console.log(`window.i`, window.i);
let h1 = window.document.getElementById("h1");

h1.align = "center";
h1.innerText = "Nouveau texte";

const span = document.createElement("span");
span.innerText = "texte du span";

h1.appendChild(span);

let section = document.getElementById("section");

// Récupération d'une référence vers l'élément du dom du premier lien
const linkFirst = document.querySelector("nav > ul > li > a");
linkFirst.style.color = "red";

// Récupération d'une référence vers l'élément du dom du 3ième lien
const linkThird = document.querySelector("nav > ul > li:nth-child(3) > a");
linkThird.style.color = "green";

while (section) {
  console.log("class de h1 : ", section.constructor.name);
  // Remonte la chaîne des prototypes
  section = Object.getPrototypeOf(section);
}

/**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
   * @param {String} markup_name 
   * @param {domElement} parent 
   * @param {String} text 
   * @param {Object} attributes
   * @returns domElement
   */
function createMarkup(markupname, parent, text = "", attributes = {}) {
  const markup = document.createElement(markupname);
  markup.textContent = text;
  parent.appendChild(markup);
  for (key in attributes) {
    markup.setAttribute(key, attributes[key]);
  }
  return markup;
}


const totoSection = createMarkup("section", document.body, "La boîte à Toto",
  {
    "id": "boite-a-toto",
    "class": "toto"
  });
const div = createMarkup("div", totoSection)