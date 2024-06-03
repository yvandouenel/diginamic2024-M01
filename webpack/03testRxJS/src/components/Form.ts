import createMarkup from "../utils/createMarkup";
import { fromEvent, Observable } from "rxjs";
import { switchMap, scan, shareReplay, filter, share } from "rxjs/operators";

export default class Form {
  private form_section: HTMLElement;
  private input_elt: HTMLElement | null;

  constructor(form_section: HTMLElement) {
    this.form_section = form_section;
    this.input_elt = this.render();
  }
  manageObservableInput() {
    if (this.input_elt) {
      const sourceCountry$ = fromEvent(this.input_elt, "input").pipe(
        switchMap((e: Event) => {
          return (this.input_elt as HTMLInputElement).value;
        })
      );
      return sourceCountry$;
    }

    return null;
  }
  private render() {
    const form = createMarkup("form", "", this.form_section);
    const input = createMarkup("input", "", form);
    if (input instanceof HTMLInputElement) return input;
    else return null;
  }
}
