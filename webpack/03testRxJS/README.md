# Pour faire fonctionner l'application

- intaller npm i
- faire un build npx webpack build
- lancer le serveur 

# Exercices
## Observable from scratch
Créez votre propre observable via l'appel du constructeur (new Observable()).
Utilisez la fonction setInterval pour que l'obersvable "émette" une valeur (de 0 à 9) toutes les secondes.
Après 10 émissions, utilisez la méthode complete pour stopper l'observable.
Souscrivez à cet observable et faites en sorte que cette souscription permette :

d'afficher dans la console la valeur chaque fois qu'elle est émise
d'afficher dans la console une erreur le cas échéant. Profitez-en pour vous désabonner de l'observable.
d'afficher dans la console un message dans le cas où l'observable est "completed". Profitez-en pour vous désabonner de l'observable.
Dans une deuxième temps, utiliser les fonctions pipe et filter pour n'afficher que les valeurs paires.

## Observables provenant d'un événement
Vous allez créer un bouton ayant pour label "+ 1" qui sera la source d'un observable. Le bouton est une instance de la classe Button qui a pour propriétés :

            private button_section: HTMLElement;
            private title: string;
            private button_elt: HTMLElement;
          
et pour méthode
            render()
            generateObservableFromClick():Observable 
              subscribeObservable(obs$: Observable):void
          
Lisez la documentation.https://www.learnrxjs.io/learn-rxjs/operators/creation/fromevent

Vous créez ensuite une classe "Counter" qui a pour propriétés :

            private button_section: HTMLElement;
            private button_elt: HTMLElement;
          
et pour méthodes :
            render()
            subscribeObservable(obs$: Observable)
          
Créez avec un décalage dans le temps d'au moins 2 secondes deux "compteurs"

Faites en sorte :
qu'à chaque clic, l'observable créé par generateObservableFromClick() renvoie le nombre de clics reçus par le dit bouton. Vous utilisez pour cela les fonctions pipe, map, et scan.
que chacun des compteurs affiche le nombre de clics (il faudra attendre que le premier bouton soit présent)
que l'observable soit d'abord un "cold observable" puis un "hot observable" à l'aide de la fonction shareReplay()

## Observables provenant d'une requête fetch
A l'aide des fonctions fromFetch, pipe, switchMap et shareReplay, construisez une fonction buildRequestObservale() de la class Data qui renvoie un "hot observable" qui renvoie lui même le retour du dernier appel de fetch.