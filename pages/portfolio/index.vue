<template>
  <div class="page container portfolio">
    <nav-bar />
    <main class="portfolio-main">
      <div v-for="(portfolio, index) in portfolios" :key="index" class="project-wrapper">
        <div class="project-detail">
          <h2 class="header" v-text="portfolio.name" />
          <!-- eslint-disable-next-line -->
          <p class="about-project" v-html="portfolio.about" />
          <!-- eslint-disable-next-line -->
          <p class="technologies" v-html="portfolio.technologies" />
          <a :href="portfolio.siteUrl" class="btn visit-site" target="_blank">
            VISIT SITE
          </a>
          <a v-if="portfolio.repoUrl" :href="portfolio.repoUrl" :style="{ color: portfolio.themeColor }" target="_blank">
            Repo ->
          </a>
          <span v-else :style="{ color: portfolio.themeColor }">
            Repo: Undisclosed
          </span>
        </div>
        <div :style="{ background: portfolio.themeColor }" class="project-headline-img">
          <img :src="portfolio.headlineImageUrl" alt="Project name">
        </div>
      </div>
      <div class="back-to-top" @click="scrollToTop">
        <span>👆</span>
        <span>Back to top</span>
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
  },
  data() {
    return {
      portfolios: [
        {
          id: 1,
          name: 'Heroshe',
          about: 'Heroshe is as Shop-for-me and Ship-for-me Service. They provide you with a free US address that allows you to shop on any online store in the US. They deliver your items to your door in Nigeria within 8 - 14days for $5 per pound.',
          technologies: '<span style="color: #000000">Technologies: </span>Python/Flask, Javascript/Nuxt.js/Vue.js, HTML5/CSS3/SCSS, Heroku, PostgreSQL, Redis, Twilio, Mailchimp, Stripe, Paystack, Cloudflare',
          repoUrl: null,
          themeColor: '#33cccb',
          siteUrl: 'https://heroshe.com',
          headlineImageUrl: '/img/heroshe.jpg'
        },
        {
          id: 2,
          name: 'DirtyLemon',
          about: 'Dirtylemon, a subsidiary of Iris Nova, Provides a unique ordering experience through SMS to sell delicious, healthy beverages to customers becoming the best-in-class conversation commerce platform. The project detail is protected. Reachout via email to learn more about it.',
          technologies: '<span style="color: #000000">Technologies: </span>Ruby, Ruby on Rails, RSpec, Git, PostgreSQL, Redis, GraphQL, Elastic Search, Sidekiq, Heroku',
          repoUrl: null,
          themeColor: '#000000',
          siteUrl: 'https://dirtylemon.com',
          headlineImageUrl: '/img/dirtylemon.jpg'
        },
        {
          id: 3,
          name: 'Dev Center Opensource LRP',
          about: 'An open-source Frontend development learning resource Platform, currated by Dev Center. Where Frontend engineers (whatever their skill level) looking for resources to learn, grow and better their their craft can fin resources.',
          technologies: '<span style="color: #000000">Technologies: </span>HTML5/CSS3, Nuxt.js/Vue.js, Zeit, Cloudflare',
          repoUrl: 'https://github.com/devcenter-square/Learning-Resource-Path-Front-End',
          themeColor: '#189fd8',
          siteUrl: 'https://devcenteropensource.com',
          headlineImageUrl: '/img/devclrp.png'
        },
        {
          id: 4,
          name: 'Gorgeous Card',
          about: 'The application is a closed sourced, enterprise grade application that has a microservice architecture with microservices for customer management, card and billing management, Authentication/Authorization, APIs, etc. The project is protected by a non disclosure agreement. Reachout via email to learn more about it.',
          technologies: '<span style="color: #000000">Technologies: </span>Nuxt.js/Vue.js, Vue.js',
          repoUrl: null,
          themeColor: '#b13231',
          siteUrl: 'https://gorgeouscard-frontend.herokuapp.com',
          headlineImageUrl: '/img/gorgeouscard.png'
        },
        {
          id: 5,
          name: 'PostIt',
          about: 'Is a simple application that allows friends and colleagues create groups for notifications. This way one person can post notifications to everyone by sending a message once - a broadcast message. The application allows people create accounts, create groups and add registered users to the groups, and then send messages out to these groups whenever they want.',
          technologies: '<span style="color: #2a9d8f">Technologies: </span>React.js, Node.js/Express',
          repoUrl: 'https://github.com/jattoabdul/andela-bootcamp-postit',
          themeColor: '#2a9d8f',
          siteUrl: 'https://jatto-postit-app-staging.herokuapp.com',
          headlineImageUrl: '/img/postit.png'
        },
        {
          id: 6,
          name: 'Jolly.ng',
          about: 'Jolly is a location discovery and rating service. The application helps you find fun places around you to explore, visit and hang out. I lead the product team at jolly over seeing the design, engineering and release phases. I actively contribute code to the project for features from recommendation systems to social/follower features.',
          technologies: '<span style="color: rgb(196, 27, 16)">Technologies: </span>Laravel, HTML/CSS, JQuery',
          repoUrl: null,
          themeColor: 'rgb(196, 27, 16)',
          siteUrl: 'https://jolly.ng',
          headlineImageUrl: '/img/jolly.png'
        }
      ]
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" src="./portfolio.scss" scoped />
