import Button from "./components/Button";
import Counter from "./components/Counter";

const button1 = new Button(document.getElementById("section-button"), "+1");
const obsClick$ = button1.generateObservableFromClick();
obsClick$.subscribe({
  next: (data) => {
    console.log(`data observée : `, data);
  },
});

const cpt1 = new Counter(document.getElementById("section-cpt"));
cpt1.subscribeObservable(obsClick$);
