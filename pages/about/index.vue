<template>
  <div class="page about">
    <nav-bar nav-class="container" />
    <main class="main-content container">
      <div class="side-headline-text">
        <h1>ABOUT</h1>
        <h1>ME</h1>
      </div>
      <div class="about-main">
        <p>
          I am a versatile fullstack software engineer and a tech evangelist. I’m constantly in pursuit of knowledge, not just to update myself but to improve the quality of the team I work with and better the lives of people around me.
        </p>
        <p>
          I enjoy setting up opportunities for learning. Co-founded the Freecodecamp Ilorin Group, served as mentor in various djangogirls events, teencode and other meetups. I also write technical and non-technical articles alike.I am constantly in pursuit of knowledge and challenging opportunities, not just to positively impact my growth, but to improve the quality of the teams I work with and better the lives of people around me.
        </p>
        <p>
          When I am not writing code or participating in online coding / algorithm challenges/games, I like to engage in some sporting activities. I do a martial art-taekwondo for self defense and sometimes I can be found playing soccer or video games.
        </p>
      </div>
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
