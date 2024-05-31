import Button from "./components/Button";
import Counter from "./components/Counter";

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

// Créer avec un décalage de 2 secondes un nouveau compteur
// Faites en sorte que l'observable soit froid puis chaud.
