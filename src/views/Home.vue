<template>
  <div id="template-home">
    <header class="header is-cover is-relative is-fullheight-with-navbar is-primary">
      <div class="content">
        <div class="header-body">
          <h1 class="title-header"><span>Développeur</span><br/>Web Junior</h1>
          <h2 class="subtitle-header">
            Développeur Web Front & Back End, passioné de Design et étudiant en Mastère Manager Informatique.
          </h2>
<!--          <button class="go-down c-arrow">-->
<!--            <div class="c-arrow-inner"></div>-->
<!--          </button>-->
        </div>
      </div>
    </header>
    <main>
      <article id="projects">
        <div class="projects-bloc-title">
          <h6>Mes Projets</h6>
        </div>
        <div class="content">
          <ul class="list-project">
            <li class="item-project" v-for="project in projects">
              <post-card v-bind="project"></post-card>
            </li>
          </ul>
        </div>
      </article>
      <article id="about-me">
        <div class="about-bloc-title">
          <h6>A propos de moi</h6>
        </div>
        <div class="content">
          <div class="content-about d-flex align-items-center">
            <div>
              <div class="subtitle">Je suis un développeur créatif basé sur Lyon, en France. Actuellement en
                dernière année de mastère au sein de l'entreprise <a class="link-underline" href="https://amtsolutions.fr" target="_blank">AMT Solutions</a>.</div>
              <p class="content-text">En mes temps perdu, j'aime créer de nouveau projet pour tester de nouvelle techno
                et voir ou j'en suis dans mes compétences. En dehors du dév, je passe mon temps à jouer
                aux jeux vidéo avec mes amis, passer du temps avec ces derniers et passer <span>énormémant</span>
                de temps à ma passion que n'est autre que les Mangas.</p>
              <div class="row">
                <div class="col-12 col-md-4 tome-number">
                  <p>Manga actuellement possédé :<span class="m-number link-underline">326</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="img-bg">
            <img src="../public/images/test-img-about.jpg" />
          </div>
        </div>
      </article>
      <article id="contact">
        <div class="contact-bloc-title">
          <h6>Contact</h6>
        </div>
        <div class="content">
          <div class="contact-content">
            <h2>I'm most active and reachable <a class="link-underline" href="https://twitter.com/MBenoit0702" target="_blank">on Twitter</a> or <a class="link-underline" href="mailto:m.benoit0702@gmail.com">via email</a>.</h2>
            <div class="row">
              <div class="col-12 col-md-6 contact-content-site">
                <a class="contact-content-site-block" href="https://twitter.com/MBenoit0702" target="_blank">
                  <i class="fab fa-twitter"></i>
                  <h4>Twitter</h4>
                  <p>Home of the majority of my social sharing about new projects progress, new tech, and killer puns.</p>
                </a>
              </div>
              <div class="col-12 col-md-6 contact-content-site">
                <a class="contact-content-site-block" href="https://github.com/Matth-Ben" target="_blank">
                  <i class="fab fa-github"></i>
                  <h4>Github</h4>
                  <p>
                    Open-source contributions and shared projects. Most of my personal projects are public repos here!
                  </p>
                </a>
              </div>
              <div class="col-12 col-md-6 contact-content-site">
                <a class="contact-content-site-block" href="https://www.linkedin.com/in/matthias-benoit-25b47812a/" target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                  <h4>Linkedin</h4>
                  <p>For demos of new tech explorations, animation, and interaction.</p>
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
      airtableResponse: []
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
