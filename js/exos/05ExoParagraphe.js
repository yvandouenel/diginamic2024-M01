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

// Création d'un bouton
const btnAddParagraph = createMarkup("button", document.body, "Ajouter un paragraphe");

// Création de la section qui entoure les paragraphes
const sectionParagraphes = createMarkup("section", document.body);


// Gestion des événements
btnAddParagraph.addEventListener("click", () => {

  const p = createMarkup("p", sectionParagraphes, "Lorem ipsum ..." + Math.random() * 1000);
  p.addEventListener("click", function (event) {

    event.currentTarget.remove();
  })
  const span = createMarkup("span", p, " texte du span");
})

// Comment faire en sorte que lors du clic sur un paragraphe, celui-ci disparaisse ? On utilisera la méthode "remove"

