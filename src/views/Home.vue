<template>
  <div id="template-home">
    <header class="header is-cover is-relative is-fullheight-with-navbar is-primary">
      <div class="content">
        <div class="header-body">
          <h1 class="title-header"><span>Développeur</span><br/>Web Junior</h1>
          <h2 class="subtitle-header">
            Développeur Web Front & Back End, passioné de Design et étudiant en Mastère Manager Informatique.
          </h2>
          <button class="go-down c-arrow">
            <div class="c-arrow-inner"></div>
          </button>
        </div>
      </div>
    </header>
    <main>
      <article id="about-me">
        <div class="content">
          <div class="content-about d-flex align-items-center">
            <div>
              <p class="subtitle">Je suis un développeur créatif basé sur Lyon, en France. Actuellement en
                dernière année de mastère au sein de l'entreprise AMT Solutions.</p>
              <p class="content-text">En mes temps perdu, j'aime créer de nouveau projet pour tester de nouvelle techno
                et voir ou j'en suis dans mes compétences. En dehors du dév, je passe mon temps à jouer
                aux jeux vidéo avec mes amis, passer du temps avec ces derniers et passer <span>énormémant</span>
                de temps à ma passion que n'est autre que les Mangas.</p>
              <div class="tome-number">
                <p>Manga actuellement possédé :<span class="m-number">326</span></p>
              </div>
            </div>
          </div>
          <div class="img-bg">
            <img src="../public/images/test-img-about.jpg" />
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
