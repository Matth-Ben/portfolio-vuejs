<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
<!--          <img src="./assets/logo.png" height="28">-->
          <span>matthiasbenoit.fr</span>
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
          <router-link to="/about" class="navbar-item">
            About
          </router-link>
          <router-link to="/projects" class="navbar-item">
            Projects
          </router-link>
          <router-link to="/contact" class="navbar-item">
            Contact
          </router-link>
        </div>
      </div>
    </nav>
    <router-view />
    <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Built by Mark Johnson with Vue.js, Bulma, and Airtable.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showNav: false,
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true
    }
  },
  computed: {
    cursorCircle () {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint () {
      return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
    }
  },
  methods: {
    moveCursor (e) {
      this.xChild = e.clientX
      this.yChild = e.clientY
      setTimeout(() => {
        this.xParent = e.clientX - 15
        this.yParent = e.clientY - 15
      }, 100)
    }
  },
  mounted () {
    document.addEventListener('mousemove', this.moveCursor)
    document.addEventListener('mouseleave', e => {
      this.hideCursor = true
    })
    document.addEventListener('mouseenter', e => {
      this.hideCursor = false
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
footer {
  //position: absolute;
  //bottom: 0;
}
</style>
<style lang="scss">
@import './public/css/style.css';
</style>
