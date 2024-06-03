import createMarkup from "../utils/createMarkup";
import { fromEvent, Observable, of } from "rxjs";
import loadCountries from "../services/loadCountries";
import {
  switchMap,
  scan,
  shareReplay,
  filter,
  share,
  debounceTime,
} from "rxjs/operators";

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
        debounceTime(300),
        switchMap((e: Event) => {
          return of((this.input_elt as HTMLInputElement).value);
        }),
        filter((name) => name.length > 2),
        switchMap((name) => {
          return loadCountries(name);
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
