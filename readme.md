# Projet Final

Afficher un ensemble de photos sur une page à partir d'une classe et d'une API.

Le projet final de cette semaine doit-être envoyé au plus tard Lundi 23 Octobre 2023 à minuit :
- url d'un dépot github ou Gitlab public via discord. Dernier push le Lundi 23 Octobre 2023 à minuit

> 🛑 En cas de problème contactez moi par Discord 

Vous devez le réaliser seul.

Une note sera établie pour être ajouté dans Yparéo selon les critères suivants : 
- respect des consignes
- projet fonctionnel
- qualité du code
- respect de la nomenclature
- qualité des commentaires

Un projet non fonctionnel ne sera pas bien noté. 
Essayer de réaliser au mieux les étapes clefs (chagement API et affichages).
Même si tout n'est pas ok, essayer de faire fonctionner une partie du code.

> 🛑 
> Bon et la note n'est pas le plus important. L'important c'est de s'entrainer.
> Donc si vraiment vous bloquez, essayer à votre manière de résoudre le projet. Peut-être sans 
> classe... peut-être sans FETCH, mais au moins vous avancez et un résultat est là 😉


## La classe `LoadPicture`

Cette classe doit vous permettre de charger des images et de les afficher dans le DOM.
Elle créée aussi un bouton pour charger les photos suivantes (s'il y en a).
Les photos sont affichées par lot de 10 par défaut.

**Fonctionnement**

Le fait d'instancier cette classe va avoir pour effet d'interroger une API (on utilisera ici l'API https://jsonplaceholder.typicode.com/) et lui demander de récupérer les 5000 photos de cette API.
Une méthode `async load()` de la classe, méthode asynchrone, est donc appelée.
Elle va se charger d'afficher l'icone de chargement, puis attendre `await` le résultat de la requête  vers l'API, puis appelera une méthode `display()` pour afficher les photos récupérée.
La même méthode sera appelée pour afficher les 10 photos suivantes.

**Icone de chargement**

Une icône d'attente (chargement) se place sur la page à l'endroit désiré (zone d'affichage) en attendant que les photos soient récupérées et afficher.
Cette icône disparait ensuite à l'affichage des photos.
Une icône vous est proposé dans le dossier `images/`

**Affichage des photos**

Vous affichez ensuite un certains nombre de photo (10 par exemple) dans la zone d'affichage.
Un bouton permet alors d'afficher les 10 photos suivantes à la suite dans la zone d'affichage.
Vous avez déjà toutes les photos. Aucune requête n'est donc nécessaire pour afficher la suite !
Votre classe doit par contre connaitre le nombre de photos à afficher par lot et le numéro du dernier lot affiché.

**Paramétrage et appel de la classe**

La classe peut-être paramétrée en précisant : 

- l'url du service API
- la zone ou les photos seront affichées dans le HTML (default : body)
- le nombre de photos à afficher par lot (un bouton permettra d'afficher le lot suivant) (default : 10)
- si on affiche les photos par ordre croissant ou décroissant (ASC ou DESC), il faudra alors trier les résultats (default : ASC)

Exemple d'une instanciation de la classe : 

```js

// Exemple d'appel minimum 
const pictures = new LoadPicture({
    url : 'https://jsonplaceholder.typicode.com/photos',
})

// Tous les paramètres (un paramètre objet contenant des propriétées)
const pictures = new LoadPicture(
{
    url : 'https://jsonplaceholder.typicode.com/photos',
    area : 'main section.photo',
    numberPhoto : 20,
    order : 'ASC'
}
)

```

## Continuez à vous amuser pour vous

Voilà un bon outil pour progresser et faire des tests.
Alors une fois le projet fini pourquoi ne pas continuer à s'amuser.
Et pourquoi pas afficher d'abord les albums... filtrer par albums...
Avec un click sur un album on requête et affiche les photos dans la même page... et ceci par lot de 10 par exemple.
Un bouton permet de revenir à la liste d'album... et on affiche un autre album...
Tout sur la même page !
Bon ça c'est pour après... et surtout pour vous créer de nouveaux challenges 😉
