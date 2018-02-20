# Apprendre-Developpement-En-Angular4
## Présentation : 
- Angular est un framework qui permet de créer des applications de type SPA (Single Page Application)
- Fournit des bases pour construire des applications coté clients riches avec une spécialisation sur la liaison de données (Data Binding), c’est-à-dire que notre application web doit mettre à jours le contenu dans l’interface utilisateur, nous pouvons le faire facilement avec Angular.
- Angular a une architecture riche de composants inspirée des composants web
- Il offre une architecture d’injection de dépendance  
## Caractéristiques:
-	**Supporte plusieurs langages :** ES5, ES6, TypeScript et Dart
-	**Complet :** Inclut toutes les briques nécessaires pour la création d’une application professionnelle : Routeur, requêtage Http, gestion des formulaires…
-	**Modulaire :** framework découpé en sous-paquets, nos applications doivent etre organisées en composants et en modules.
-	**Rapide** 
## Angular 1, 2 et 4:
- **Angular 1 (AngularJS)** : 
 >Première version de Angular la plus populaire.
 >Basé sur une architecture MVC coté client
 >Angular 1 est écrit en Javascript.
 - **Angular 2 (Angular) :**
 >C'est éécriture compléte d'Angular 1 plus performant et mieux structurée.
 >Il est écrit en TypeScript qui est compilé et traduit en javaScript avant d'étre exécuté par les Browsers Web.
 > Architecture basé sur les composents web (Web Component).
 - **Angular 4:** 
 > Une mise à jours d'Angular 2.

## Architercture :

 - Angular a une architecture de composanti nspirée des composant web
 - Une application Angular se compose de :
   - Un ou plusieur modules dont un est principal
   - Chaque module peut inclure:
     - **Des composant web :** la partie visible de l'application Web
     - **Des services:**  Les Composant peuvent utiliser des services via le principe de l'injection des dépendences.
     - **Les directives :** un composant peut utiliser des directives 
     - **Les pipes:** utilisés pour formater l'affichage des données dans les composants.
![An awesome example image](https://image.ibb.co/mUTmwS/06.png "StructureComposant")

## Les Composants 
### Les Modules 
- Les applications Angular sont modulaires.
- Angular possède son propre système de modularité appelé `modules angular`ou `NgModules`.
- Chaque application Angular possède au moins une classe de module angular: le module racine, appelé classiquement `AppModule`.
- Un module angular est une classe avec un décorateur `@NgModule`.
- Les décorateurs sont des fonctions qui modifient les classes JavaScript.
- Angular possède de nombreux décorateurs qui attachent des métadonnées aux classes pour configurer et donner le sens à ces classes.
![An awesome example image](https://image.ibb.co/jogeJH/07.png "Structure")
- `NgModule` est un décorateur qui prend en parametre un objet JavaScript qui contient des métadonnés don't les propriétés décrivent le module. Les proporiétés les plus importantes sont :
    - **declarations:** la classe représentant le module. Angular a trois types de classes de modules: `components, directives and pipes`.
    - **imports:** c'est importer d'autre modules.
    - **providers:** pour la déclaration des servives
    - **exports:** pour exporter les classes utilisables dans d'autres modules.
    - **bootstrap:** pour déclarer le composant racine  du module. Seul le module racine doit définir cette propriété.
- Le module racine est démarré dans le fichier `main.ts`.
- Par défaut le module racine s'appelle `AppModule`

### Les Composants
{: .composants-orange}


     
 ## Création d'une Application Angular 
 ### Outils d'installation
 Pour débuter le développement d'une application angular, il faut installé les outils suivants: 

- [NodeJS](https://nodejs.org/en/download/) : - Node Js installe l'outil npm qui permet de télécharger et installer des bibliothèque JavaScript.
- [Installer Angular CLI](https://cli.angular.io/): - permet de générer, compiler, tester et déployer les projets angular 
- `npm install -g @angular/cli`
- Pour vérifier si angular CLI est bien installer, taper:  `ng -v`.
### Création d'un nouveau Projet Angular
- Pour générer la structure d'un projet Angular, on utilise Angular CLI via sa commande ng suivie des options **new** et **nomProjet**
   - `ng new FirstApp`
- Cette commande génère les différen sfichiers requis par une application basique Angular et installe aussi toutes les dépendences requise par ce projet.
### Exécution du projet 
- Pour executer votre projet Angular, nous exécutons la commande : `ng serve`
- cette commande compile de code source du projet pour transpiler le code TypeScript en JavaScript et en méme temps démarre un serveur Web local basé sur Node Js pour déployer l'application localement.
- Pour tester le projet généré, il suffit de lancer le navigateur et tapeer : `http://localhost:4200`
- Dans l'étape suivate, nous allons regarder la structure du projet généré par Angular CLI.
### Structure du projet Angular
![An awesome example image](https://image.ibb.co/mJiDt7/01.png "Structure")
- Comme nous pouvons le constater d'après la structurel le code est constituer d'une page `index.html` qui va faire appel au composant racine de l'application qui est `<app-root> `.
- Le `main.ts`c'est le premier fichier qui va etre démarer et qui contient le module principale.
- Et nous avons le composant qui se compose de quatre fichiers: 
   - Nous avons la partie `html`c'est la `Vue`.
   - La partie TypeScript qui représente une classe `AppComponent`avec un décorateur `@Component`dont le quel nous spécifions :
      - Le Seletceur : élément utiliser pour afficher le composant dans la partie html.
      - templateUrl : pour afficher la vue associée au composant
      - styleUrls : pour définir le style du composant
![An awesome example image](https://preview.ibb.co/en1QO7/05.png "StructureComposant")
      






