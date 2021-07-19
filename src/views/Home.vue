<template>
  <div id="template-home">
    <header class="header is-cover is-relative is-fullheight-with-navbar is-primary">
      <div class="content">
        <div class="header-body">
          <h1 class="title-header"><span>Développeur</span><br/>web</h1>
          <h2 class="subtitle-header">
            Développeur Web Front & Back End, passioné de Design et en recherche d'un poste d'ingénieur logiciel sur Lyon.
          </h2>
<!--          <button class="go-down c-arrow">-->
<!--            <div class="c-arrow-inner"></div>-->
<!--          </button>-->
        </div>
      </div>
    </header>
    <main>
      <article id="projects" v-if="projects[0]">
        <div class="projects-bloc-title">
          <h6>Mes Projets</h6>
        </div>
        <div class="content">
          <ul class="list-project">
            <li class="item-project" v-for="project in projects" v-bind="project.id">
              <post-card v-bind="project"></post-card>
            </li>
          </ul>
        </div>
      </article>
      <article id="about-me" class="d-flex">
        <div class="about-bloc-title">
          <h6>A propos de moi</h6>
        </div>
        <div class="content-about align-items-center">
          <div class="about-me-content-block">
            <div class="subtitle">Nommé Matthias BENOIT, développeur créatif basé sur Lyon.</div>
            <p class="content-text">En mes temps perdus, j'aime créer de nouveau projet pour tester de nouvelle techno et voir ou j'en suis dans mes compétences.
            En dehors du dév, je passe mon temps à jouer aux jeux vidéo avec mes amis et à vivre ma passion qui n'est autre que l'univers des Mangas et des Animés.</p>
            <div class="row">
              <div class="col-12 col-md-6 tome-number">
                <p>Manga possédé :<span class="m-number link-underline">326</span></p>
              </div>
              <div class="col-12 col-md-6 tome-number">
                <p>Manga lu :<span class="m-number link-underline">Incalculable</span></p>
              </div>
              <div class="col-12 col-md-12 tome-number">
                <p>Animé regardé :<span class="m-number link-underline">Beaucoup trop</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="about-me-image-block">
          <div class="img-bg">
            <img src="../public/images/photo_profil_2.jpeg" />
          </div>
        </div>
      </article>
      <article id="contact">
        <div class="contact-bloc-title">
          <h6>Contact</h6>
        </div>
        <div class="content">
          <div class="contact-content">
            <h2>Je suis le plus actif et joignable sur <a class="link-underline" href="https://twitter.com/BenoitMatthias" target="_blank">Twitter</a> ou <a class="link-underline" href="mailto:matthiasbenoit.pro@gmail.com">via email</a>.</h2>
            <div class="row">
              <div class="col-12 col-md-6 contact-content-site">
                <a class="contact-content-site-block" href="https://twitter.com/BenoitMatthias" target="_blank">
                  <i class="fab fa-twitter"></i>
                  <h4>Twitter</h4>
                  <p>
                    Accueil la majorité de mes partages sociaux sur l'avancement de nouveaux projets et les nouvelles technologies.
                  </p>
                </a>
              </div>
              <div class="col-12 col-md-6 contact-content-site">
                <a class="contact-content-site-block" href="https://github.com/Matth-Ben" target="_blank">
                  <i class="fab fa-github"></i>
                  <h4>Github</h4>
                  <p>
                    Plateforme de partage de la plupart de mes projets personnels qui sont des dépôts publics !
                  </p>
                </a>
              </div>
              <div class="col-12 col-md-6 contact-content-site">
                <a class="contact-content-site-block" href="https://www.linkedin.com/in/matthias-benoit-25b47812a/" target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                  <h4>Linkedin</h4>
                  <p>
                    Le réseaux qui me permet de créer mon réseaux et de partager des points de vue.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import ProjectsService from '../services/ProjectsService'
import PostCard from '../components/PostCard'
export default {
  name: 'home',
  components: {
    PostCard
  },
  data () {
    return {
      airtableResponse: [],
    }
  },
  mounted: function () {
    let self = this
    async function getProjects () {
      try {
        const response = await ProjectsService.getProjects()
        console.log(response)
        self.airtableResponse = response.data.records
      } catch (err) {
        console.log(err)
      }
    }
    getProjects()
  },
  computed: {
    projects () {
      let self = this
      let projectList = []
      for (var i = 0; i < self.airtableResponse.length; i++) {
        if (self.airtableResponse[i].fields.Published) {
          let project = {
            title: self.airtableResponse[i].fields.Title,
            slug: self.airtableResponse[i].fields.slug
          }
          projectList.push(project)
        }
      }
      return projectList
    }
  }
}
</script>
