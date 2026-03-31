# framework-web-project/ MovieDeck
*MovieDeck est une site web  développée en Vue.js. Elle permet de découvrir les films les plus populaires, de rechercher des oeuvres spécifiques et de gérer une collection personnelle de films favoris.*

##  Dévellopement
>Site développé par Tom Eisenschmidt, étudiant en L3 SDN.
>Utilisation du language Vue.js version vue@3.5.27 avec les dépendances supplémentaires router, axios et pinia.

## API
Utilisation de l'API libre d'accès TMDB pour la data. 
>https://www.themoviedb.org/

## Lancement de du site 
Pour faire tourner ce projet, vous aurez besoin de Node.js 
>https://nodejs.org/

Ouvrez votre terminal et placez-vous dans le dossier du projet, puis installez les dépendances :
>npm install

Puis toujours dans le dossier framework-web-project/MovieDeck/ , ouvrez un terminal de commande et entrer cette requète.
    `npm run dev`
Ouvrez ensuite votre navigateur et accédez à l'URL fournie dans le terminal.

## Fonctionnalités

* ** Découverte :** Affichage dynamique des films les plus populaires du moment via l'API TMDB.
* ** Recherche :** Barre de recherche permettant de trouver un film par son titre.
* **Filtres :** Boutons dédiés pour afficher rapidement les films "Mieux notés" ou les films "Récents et Pouplaire"
* **Fiches Détaillées :** Pour chaque film affichant ses détails.
* **Gestion des Favoris :** * Ajout et suppression de films aux favoris depuis la page d'accueil ou la page détail.


## Difficultés Rencontrés 
 * Trouver l'API: trouver un api de film en francais, fiable, gratuite et l'intégrer
 * Intégration d'une bar de recherche
 * division des priortés et gestions du nombre de page(view)
 * gestion des nouvelles requetes en cas de defilement


