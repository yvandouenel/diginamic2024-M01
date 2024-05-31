import createMarkup from "../utils/createMarkup";
import { fromEvent, Observable } from "rxjs";
import { map, scan, shareReplay, filter } from "rxjs/operators";

export default class Button {
  private button_section: HTMLElement;
  private title: string;
  private button_elt: HTMLElement;

  constructor(button_section: HTMLElement, title: string) {
    this.button_section = button_section;
    this.title = title;
    this.button_elt = this.render();
  }
  private render() {
    const btn = createMarkup("button", this.title, this.button_section);
    return btn;
  }
  generateObservableFromClick(): Observable<number> {
    console.log(`Dans generateObservableFromClick`);
    const clicks$: Observable<number> = fromEvent(
      this.button_elt,
      "click"
    ).pipe(
      // je transforme la donnée initiale (une instance d'événement) en nombre (ici 1)
      map((event: Event) => 1),
      scan((count) => count + 1) // permet de cumuler les valeurs
      // shareReplay()// Si shareReplay est activé, l'observable devient "hot" sinon, il est "cold"
    );
    return clicks$;
  }
}
