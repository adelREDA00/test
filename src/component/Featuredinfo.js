import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Featuredinfo = () => {
  return (
    <div className="all">
         
    <div className="featured">
    <div className="featuredItem">
      <span className="featuredTitle">SPA</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">Singel page</span>
        <span className="featuredMoneyRate">
           <ArrowDownwardIcon  className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Vous pouvez tester cette application web en ajoutant un utilisateur dans l'onglet "ADD", en appuyant sur "Créer", puis en consultant la page "Users" pour voir le fichier utilisateur nouvellement créé. Vous pouvez également modifier ou supprimer l'utilisateur en temps réel grâce à la technologie React, qui rend tout extrêmement rapide et fluide. Tout cela se fait dans une seule page, <mark>sans avoir à recharger la page</mark> .</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Fonctionnalités en développement</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">Down</span>
        <span className="featuredMoneyRate">
          -4 <ArrowDownwardIcon className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">En raison de contraintes d'hébergement (le plan Heroku gratuit étant épuisé), certaines fonctionnalités sont en cours de développement. Voici une liste des fonctionnalités prévues : <br />
      -Doctors management <br />
      -messages <br />
      -schedule <br />
      -rendez vous
      </span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Technologies </span>
      <div className="featuredMoneyContainer">
        <div className="fifa">
        <h4 >  -React.js</h4>
        <h4 >   -Redux</h4>
      <h4 >   -Django</h4>
      <h4 >   -Django REST Framework </h4>
      <h4 >   -PostgreSQL</h4>
        </div>


      </div>
      
      
    </div>
    

  </div>
  <div className="test" >
  <br />
  <br />
  Ce projet est une application web que j'ai créée à l'origine pour une <mark>organisation de lutte contre le cancer afin de gérer les données de leurs patients</mark>  <a href="https://www.facebook.com/profile.php?id=100078928476735&mibextid=ZbWKwL" target="_blank" rel="noreferrer" >Hpp</a>  à l'aide d'une interface conviviale construite avec React, une API REST Django et une base de données PostgreSQL.
 <br /><br />
 <h1>Fonctionnalités</h1>

 <mark> Authentification utilisateur</mark> : Les utilisateurs peuvent s'inscrire, se connecter et se déconnecter de l'application à l'aide d'un système d'authentification sécurisé basé sur JSON Web Tokens (JWT). <br />
 <mark>Opérations CRUD </mark>: Les utilisateurs peuvent créer, lire, mettre à jour et supprimer des articles dans la base de données à l'aide d'une interface simple et intuitive qui met automatiquement à jour l'interface utilisateur en temps réel.<br />
<mark>Recherche et filtrage</mark>
 : Les utilisateurs peuvent rechercher et filtrer des articles dans la base de données en fonction de différents critères, tels que le nom, la date et la catégorie, à l'aide d'un puissant système de recherche et de filtrage qui exploite l'ORM de Django.<br />
<mark>Pagination </mark>
: Les utilisateurs peuvent parcourir les articles dans la base de données à l'aide d'un système de pagination qui leur permet de naviguer entre différentes pages de résultats.
<br />
<mark>Gestion des erreurs</mark>
 : L'application gère les erreurs de manière élégante et affiche des messages informatifs aux utilisateurs en cas d'entrées invalides ou d'erreurs serveur.
 </div>
     </div>
  )
}

export default Featuredinfo