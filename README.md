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

### Métadonnées de composant: 
- L'application Angular est formée par un ensemeble de composants.
- Chaque composant peut imbriquer d'autre composants définissant ainsi un structure hiérarchique.
- Le composant racine s'appelle `Root Component`.
- Chaque composant se compose des éléments suivants:
   - `HTML Template` : représente la vue.
   - Une classe représente la logique métier.
   - Une feuille de style CSS.
   - Un fichier `spec` est le tests unitaire. Il est exécuté à l'aide du framwork de test javaScript Jasmine vua le programme de taches Karma lorsque nous utilisons le commande `ng test`.
- Les composants sont facile à mettre à jour et à échanger entre les différents parties des applications.
![An awesome example image](https://image.ibb.co/b22NNc/08.png "composant")
- Un composant est une classe qui possède le décorateur `@Component`
- Ce décorateur possède des proporiètés suivantes:
   - `selector`: indique la déclaration qui permet d'insérer le composant dans le document HTML.
   - `template ou templateUrl`: 
      - `template`: permet de définir dans le décorateur le code HTML repésentant la vue du composant.
      - `templateUrl`: permet d'associer un fichier externe HTML contenant la structure de la vue du composant.
  - `StyleUrls`: spécifie les feuilles de styles CSS associées à ce composant.
### Data Binding
- Le framework Angular est bien plus qu'un simple moteur de rendu de modèles de balisage à travers des composants. L'un de ses points forts est le `Data binding` la facilité de lier des données à des vues et de travailler avec des données dans ces vues. 
- Pour insérer dynamiquement des données de l'applications dans les vues des composants, Angular définit des techniques pour assurer la liaison de donées.
- Data Binding = Communication.
![An awesome example image](https://image.ibb.co/mdTRiH/10.png "Data Binding")

- Angular a défini quatre sortes de Data Binding pour synchroniser le template et le Component. Il est ainsi possible de propager une donnée du Component vers le DOM, du DOM vers le Component et dans les deux sens. Ces formes de Data Binding sont communément nommées: 
> - Interpolation : Ce mécanisme permet de modifier le DOM à partir du modèle, si un changement est intervenu sur une valeur de ce dernier.
> - Property Binding : Ce mécanisme permet de valoriser une propriété d'un composant ou d'une directive à partir du modèle, si un changement est intervenu sur une valeur de ce dernier.
>  - Event Binding : Ce mécanisme permet d'exécuter une fonction portée par un Component suite à un évènement émis par un élément du DOM.
>  - Le "two-way" Data Binding : C'est une combinaison du Property Binding et du Event Binding sous une unique annotation. Dans ce cas là, le component se charge d'impacter le DOM en cas de changement du modèle ET le DOM avertit le Component d'un changement via l'émission d'un évènement. Le mécanisme se rapproche du fameux ngModel Angular 1, mais avec des algorithmes de Data Binding différents.
#### Exemple de Data Binding
![An awesome example image](https://image.ibb.co/b1qvcc/12.png "Data Binding Exemple")

### Les Services et Injection des dépendences

#### Injection des dépendences
- L'injection de dépendence est une façon de fournir une nouvel instance d'une classe avec la dépendences entièrement formées dont elle a besoin.
- La plutpart des dépendences sont des services.
##### Décorateur Injectable
- `@Injectable()` est un décorateur un peu particulier. Il ne permet pas l’injection à proprement parlé, mais plutôt d’initialiser un contexte détectabilité. Si vous injectez dans un de vos services ( sans ce décorateur) un autre service, le moteur d'injection retournera une erreur. Angular conseille de toujours mettre cette annotation sur un service même si vous n'utilisez pas les injections dans les premiers développements de votre service afin d'éviter de se poser la question plus tard.

   > Pour informaion, les decorateurs `@Component`, `@Pipe`, et `@Directive` sont des sous classes de `@Injectable()`.
   > Ces décorateurs ajoutent des MetaDatas au code JavaScript transpilé à partir de nos fichiers TypeScript.
   > Par défaut, le compilateur TypeScript rejette toutes les meta-données. Pour que ces metadatas soient integrées au JavaScript, l'option `emitDecoratorMetadata` doit être à true dans votre fichier `tsconfig.json` de votre projet.  
   > Angular-CLI a dèjà configuré  votre `tsconfig.json` pour les prendre en charge
#### Services  
- Les services ne sont qu'une classe pour encapsuler une certaine logique que nous souhaitons partager à travers des endroits dans l'applications.
- Généralement, les composants se limite à l'affichage et à la gestion des événements utilisateurs dans la vue du composant. L'éxecution des traitements en local ou en back-end sont attribués aux services.
- Quand un événement survient dans la vue, le composant fait appel à des fonctions dans les services pour effectuer des traitements et fournir des résultats.
- **Généralement, c'est `les service`qui integragissent avec la partie back-end de l'application en envoyant des requetes HTTP.**
- Les composants consomment les services, toutefois, un service peut consommer d'autres services.
- Avec l'injection de dépendence d4angular, nous pouvons injecter des services autour de notre application.
> **Pourquoi Utiliser des Services.**
> - Ajoute une logique métier à notre application.
> - Service de données: classe qui gère l'obtention et la configuration des données.

####Enregistrement des services 
- Pour utiliser un service, il faut préalablement enregistrer un fournisseur de ce service avec l'injecteur.
- Un fournisseur de service est une fabrique qui permet de gérer l'instanciation des services.
- Pour inclure le service en tant que fournisseur, nous devons d'abord importer le service via l'importation `{AboutService}`.(dans notre exemple)
- Ensuite, nous devons enregistrer `AboutService` en tant que fournisseur dans le décorateur `@NgModule`. En enregistrant le service en tant que fournisseur, nous le rendons disponible partout dans l'application.
![An awesome example image](https://image.ibb.co/hdSY0x/13.png "Sevice")

### Routage et Navigation
- Angular a un ensemble de modules nommé `Router` pour gérer le routage côté client.
- Le routeur angular permet la navigation d'une vue à l'autre lorsque les utilisateurs exécutent des taches d'application.
- Le routeur angular est un service facultatif qui présente une vue de composant particulière pour une URL donnée.
- Il ne fait pas partie du noyeau angular.
- C'est dans son propore paquet de bibliothèque `@angular/router`.
- Importez ce dont vous avez besoin comme vous le feriez à partir de tout paquet Angular.
**src/app/app.module.ts(import)**
`import { RouterModule, Routes} from '@angular/router' `.

![An awesome example image](https://image.ibb.co/dNmo0x/14.png "Router")







     
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
### Création de nouveaux composant:
- Pour créer un nouveau composant nous pouvons utiliser la commande `ng generate component NomComposant`.
### Déclaration de composant:
- Pour utiliser un composantn ce dernier doit etre déclaré dans le module


      






