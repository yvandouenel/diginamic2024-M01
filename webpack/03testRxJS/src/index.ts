import { Observable } from "rxjs";
console.log(`HelloWorld`);

// Création d'un observable froid
const obs1$ = new Observable((observer) => {
  // Notification next synchrone
  observer.next(1);
  setTimeout(() => {
    observer.next(2);
  }, 2000);
});
console.log(`obs1`, obs1$);

// Souscription à l'observable
const subscription1 = obs1$.subscribe({
  next: (data) => console.log(`data dans observer 1`, data),
});
setTimeout(() => {
  const subscription2 = obs1$.subscribe({
    next: (data) => console.log(`data dans observer 2`, data),
  });
}, 1000);
