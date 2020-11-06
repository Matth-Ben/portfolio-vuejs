<template>
  <div id="single-project">
    <section id="single-project-header">
      <div class="content">
        <div class="single-project-header-return-back">
          <router-link to="/">
            <i class="fas fa-long-arrow-alt-left"></i>
          </router-link>
        </div>
        <div class="single-project-header-block">
          <div>
            <h1 class="single-project-header-block-title">
              {{project.title}}
            </h1>
            <h4 class="single-project-header-block-type">{{project.type}}</h4>
            <a class="btn-primary single-project-header-block-link" :href="project.link">
              <span>
                Voir site
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="single-project-body">
      <div id="single-project-body-concept" v-if="!!project.concept">
        <div class="content">
          <div class="row">
            <div class="col-12 col-md-4 d-flex">
              <h2 class="single-project-body-title text-underline">Concept</h2>
            </div>
            <div class="col-12 col-md-8">
              <p>{{project.concept}}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="single-project-body-preview" v-if="!!project.imgAllPage">
        <div v-for="image in project.imgAllPage">
          <img style="width: 100%" :src="image.url"/>
        </div>
      </div>
      <div id="single-project-body-development" v-if="!!project.development">
        <div class="content">
          <div class="row">
            <div class="col-12 col-md-4 d-flex">
              <h2 class="single-project-body-title text-underline">Développement</h2>
            </div>
            <div class="col-12 col-md-8">
              <p>{{project.development}}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="single-project-body-previews" v-if="!!project.imgFullPages">
        <div class="row">
          <div v-for="image in project.imgFullPages">
            <img :src="image.url"/>
          </div>
        </div>
      </div>
      <div id="single-project-body-testimony" v-if="!!project.testimony">
        <div class="content">
          <div class="row">
            <div class="col-12 col-md-4 d-flex">
              <h2 class="single-project-body-title text-underline">Témoignage</h2>
            </div>
            <div class="col-12 col-md-8">
              <p>{{project.testimony}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="single-project-back">
      <div class="content">
        <div class="d-flex">
          <router-link to="/" class="back-btn link-underline">
            Back
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectsService from '../services/ProjectsService'
import PostCard from '../components/PostCard'

export default {
  name: 'project',
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
    async function getProject () {
      try {
        const response = await ProjectsService.getProject(self.$route.params.slug)
        self.airtableResponse = response.data.records
      } catch (err) {
        console.log(err)
      }
    }
    getProject()
  },
  computed: {
    project () {
      let self = this
      if (self.airtableResponse[0]) {
        return {
          title: self.airtableResponse[0].fields.Title,
          link: self.airtableResponse[0].fields.Link,
          logo: self.airtableResponse[0].fields.Logo,
          body: self.airtableResponse[0].fields.Body,
          type: self.airtableResponse[0].fields.Type,
          concept: self.airtableResponse[0].fields.Concept,
          imgAllPage: self.airtableResponse[0].fields.ScreenAllPage,
          development: self.airtableResponse[0].fields.Development,
          imgFullPages: self.airtableResponse[0].fields.ScreenFullPage,
          date: self.airtableResponse[0].fields.Date,
          testimony: self.airtableResponse[0].fields.Temoignages
        }
      }
    }
  }
}
</script>
