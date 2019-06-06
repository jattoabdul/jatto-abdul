<template>
  <div>
    <nav-bar />
    <main>
      <h1 class="title">
        jatto-abdul about
      </h1>
      <h2 class="subtitle">
        Abdulqahhar Aminujatto&#39;s web profile and portfolio
      </h2>
    </main>
    <page-footer />
  </div>
</template>

<script>
import NavBar from '~/components/partials/navbar.vue'
import PageFooter from '~/components/partials/pagefooter.vue'

export default {
  head: {
    title: 'Abdulqahhar Aminujatto - About Me'
  },
  components: {
    NavBar,
    PageFooter
  }
}
</script>

<style lang="scss" src="./about.scss" scoped />
