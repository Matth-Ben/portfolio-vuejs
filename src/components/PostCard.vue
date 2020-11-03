<template>
  <router-link :to="'/project/'+slug" class="button is-fullwidth">
    <h3 class="projects-item-title">{{title}}</h3>
    <span class="projects-item-line"></span>
  </router-link>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    title: String,
    date: String,
    snippet: String,
    image: String,
    slug: String
  }
}
</script>
