import { Observable, of } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap, catchError } from "rxjs/operators";

export default function loadCountries(name: string): Observable<object[]> {
  return fromFetch(`https://restcountries.com/v3.1/name/${name}`).pipe(
    switchMap((response) => {
      if (response.status == 404) {
        console.log(`fromFetch response.status == 404`);
        return of([]);
      } else {
        return response.json();
      }
    }),
    catchError((err) => {
      // Network or other error, handle appropriately
      return of([]);
    })
  );
}
