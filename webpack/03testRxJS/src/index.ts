import Button from "./components/Button";
import Counter from "./components/Counter";
import Form from "./components/Form";
import loadCountries from "./services/loadCountries";

const button1 = new Button(
  document.getElementById("section-button") as HTMLElement,
  "+1"
);
const obsClick$ = button1.generateObservableFromClick();
obsClick$.subscribe({
  next: (data) => {
    console.log(`data observée : `, data);
  },
});

const cpt1 = new Counter(document.getElementById("section-cpt") as HTMLElement);
cpt1.subscribeObservable(obsClick$);

setTimeout(() => {
  const cpt2 = new Counter(
    document.getElementById("section-cpt") as HTMLElement
  );
  cpt2.subscribeObservable(obsClick$);
}, 2000);
// Création du formulaire
const form = new Form(document.getElementById("section-form") as HTMLElement);

// Utilisation des observables avec fetch
const obsCountries$ = loadCountries("fra");
obsCountries$.subscribe((countries) => console.log("countries", countries));
