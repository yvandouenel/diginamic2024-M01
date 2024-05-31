import { Observable } from "rxjs";
import { share, shareReplay } from "rxjs/operators";
console.log(`HelloWorld`);

// Création d'un observable froid
const obs1$ = new Observable((observer) => {
  // Notification next synchrone
  let i = 0;
  const intervalID = setInterval(() => {
    observer.next(i);
    i++;
    if (i > 9) {
      clearInterval(intervalID);
      observer.complete();
    }
  }, 1000);
}).pipe(shareReplay(1));
console.log(`obs1`, obs1$);

// Souscription à l'observable
const subscription1 = obs1$.subscribe({
  next: (data) => {
    console.log(`data dans observer 1`, data);
    if (data == 3) subscription1.unsubscribe();
  },
  complete: () => {
    console.log(`Oservable terminé`);
    subscription1.unsubscribe();
  },
});

setTimeout(() => {
  // Nouvelle ouscription à l'observable après 5 seconde
  const subscription2 = obs1$.subscribe({
    next: (data) => console.log(`data dans observer 2`, data),
  });
}, 5000);
