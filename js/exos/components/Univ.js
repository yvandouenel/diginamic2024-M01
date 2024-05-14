import { createMarkup } from './../utils/tools.js';

export default class Univ {
  constructor(name, url = "", parent) {
    this.name = name;
    this.url = url;
    this.parent = parent;

    this.render();
  }
  render() {
    const section = createMarkup("section", this.parent, "", { "class": "col-md-4 my-3" });
    createMarkup("h2", section, this.name);
    createMarkup("a", section, this.url, { "href": this.url });
  }
}