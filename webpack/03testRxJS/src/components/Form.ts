import createMarkup from "../utils/createMarkup";
import { fromEvent, Observable } from "rxjs";
import { map, scan, shareReplay, filter, share } from "rxjs/operators";

export default class Button {
  private form_section: HTMLElement;
  private title: string;
  private input_elt: HTMLElement;

  constructor(button_section: HTMLElement) {
    this.form_section = button_section;
    this.input_elt = this.render();
  }
  private render() {
    const form = createMarkup("form", "", this.form_section);
    const input = createMarkup("input", "", form);
    return input;
  }
}
