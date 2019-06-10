<template>
  <div class="page container portfolio">
    <nav-bar />
    <main class="portfolio-main">
      WIP (Work In Progress)
      <div v-for="(n, index) in 4" :key="index" class="project-wrapper">
        <div class="project-detail">
          <h2>Heroshe</h2>
          <p class="about-project">
            Heroshe is as Shop-for-me and Ship-for-me Service. They provide you with a free US address that allows you to shop on any online store in the US. They deliver your items to your door in Nigeria within 8 - 14days for $5 per pound.
          </p>
          <p class="technologies">
            <span>Technologies:</span> Python/Flask, Javascript/Nuxt.js/Vue.js, HTML5/CSS3/SCSS, Heroku, PostgreSQL, Redis, Twilio, Mailchimp, Stripe, Paystack, Cloudflare
          </p>
          <a href="https://heroshe.com" class="btn">VISIT SITE</a>
          <span>Repo: Undisclosed</span>
          <!-- <a href="https://github.com/jattoabdul/heroshe" class="btn">Repo -></a> -->
        </div>
        <div class="project-headline-img">
          <img src="/img/heroshe.jpg" alt="Project name">
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '~/components/partials/navbar.vue'

export default {
  head: {
    title: 'Abdulqahhar Aminujatto - Portfolio'
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss" src="./portfolio.scss" scoped />
