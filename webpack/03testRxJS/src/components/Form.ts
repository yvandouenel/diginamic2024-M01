import createMarkup from "../utils/createMarkup";
import { fromEvent, Observable } from "rxjs";
import { map, scan, shareReplay, filter, share } from "rxjs/operators";

export default class Form {
  private form_section: HTMLElement;
  private input_elt: HTMLElement;

  constructor(form_section: HTMLElement) {
    this.form_section = form_section;
    this.input_elt = this.render();
  }
  private render() {
    const form = createMarkup("form", "", this.form_section);
    const input = createMarkup("input", "", form);
    return input;
  }
}
