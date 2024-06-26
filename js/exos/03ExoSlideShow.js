class Slideshow {
  constructor(nbImages, width, height, speed) {
    this.nbImages = nbImages;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.images = [];
    this.feedSs();
    this.render();
    this.animateSs(0);
  }
  /**
   * Cache toutes les images (propriété hidden) sauf celle qui a pour index "index"
   * fonction récursive
   * @param {number} index 
   */
  animateSs(index = 0) {
    // cacher toutes les images sauf la première
    this.images.forEach((img, i) => {
      img.hidden = i == index ? false : true;
    })

    // cacher l'image courante et afficher la suivante toutes les "speed"
    setTimeout(() => {
      // fonction récursive
      this.animateSs((index + 1) % this.nbImages);
    }, this.speed);

  }
  feedSs() {
    for (let i = 0; i < this.nbImages; i++) {
      this.images.push(this.createImage());
    }
  }
  createImage() {
    // création d'une image
    const img = document.createElement("img");
    img.setAttribute("src", `https://picsum.photos/${this.width}/${this.height}?id=${Math.random() * 1000}`);
    return img;
  }
  render() {
    // Création du wrapper du slideshow
    const sectionSlideshow = this.createMarkup("section", document.body);

    // Positionnement des images
    this.images.forEach(img => {
      sectionSlideshow.appendChild(img);
    })
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
  createMarkup(markupname, parent, text = "", attributes = {}) {
    const markup = document.createElement(markupname);
    markup.textContent = text;
    parent.appendChild(markup);
    for (key in attributes) {
      markup.setAttribute(key, attributes[key]);
    }
    return markup;
  }
}

const slideShow = new Slideshow(3, 1200, 800, 3000);