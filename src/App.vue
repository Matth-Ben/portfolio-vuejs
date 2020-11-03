<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span>matthiasbenoit.fr</span>
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

</style>
<style lang="scss">
@import './public/css/style.css';
</style>
