import createMarkup from "../utils/createMarkup";
import { Observable } from "rxjs";

export default class Counter {
  private button_section: HTMLElement;
  private button_elt: HTMLElement;
  constructor(button_section: HTMLElement) {
    this.button_section = button_section;
    this.button_elt = this.render();
  }
  private render() {
    const btn = createMarkup("button", "0", this.button_section);
    return btn;
  }

  subscribeObservable(obs$: Observable<any>) {
    obs$.subscribe((x) => (this.button_elt.innerText = x));
  }
}
