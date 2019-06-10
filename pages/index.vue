<template>
  <div class="page container home">
    <div class="side-image">
      <img src="/img/jatto.jpg" alt="My personal picture">
    </div>
    <div class="home-main">
      <nav-bar nav-class="home" />
      <div class="side-image-mobile">
        <img src="/img/jatto-mobile.jpg" alt="My personal picture for mobile">
      </div>
      <main class="main-content">
        <h2 class="title-intro">
          HELLO! I AM
        </h2>
        <h1 class="title">
          ABDULQAHHAR
          <br> AMINUJATTO
        </h1>
        <p class="about-headline">
          I am a versatile fullstack software engineer and a tech evangelist. I hold a bachelor of technology’s degree in geology with about 4 years experience building incredible software products for globally distributed teams.
        </p>

        <nuxt-link to="/portfolio" class="btn view-portfolio">
          View Portfolio
        </nuxt-link>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/partials/navbar.vue'

export default {
  head: {
    title: 'Abdulqahhar Aminujatto - Home'
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss" src="./index.scss" scoped />
