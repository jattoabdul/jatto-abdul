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
          I am a versatile software engineer and a tech evangelist. I hold a bachelor of technology's degree in Geology with about 4 years experience building incredible software products for globally distributed teams. designing and developing solutions to solve complex technical problems using programming languages/frameworks such as python/flask, ruby/ruby on rails, javascript/React.js and vue.js. I have also worked with databases such as postgreSQL, MySQL and mongoDB. I have built REST and graphQL endpoints alike.
        </p>
        <p>
          I am enthusiastic about developing practical business solutions using my skill sets. I am constantly in pursuit of knowledge, seeking a fast-paced, challenging opportunities and agile work environment, not just to push the boundaries of my knowledge and positively impact my growth but to improve the quality of the teams I work with and better the lives of people around me. #IKeepLearning
        </p>
        <p>
          I enjoy setting up opportunities for learning. Co-founded the Freecodecamp Ilorin Group, served as mentor in various djangogirls events, teencode and other meetups. I also write technical and non-technical articles alike.
        </p>
        <p>
          When I am not writing code or participating in online coding / algorithm challenges/games, I like to engage in some sporting activities. I do a martial art-taekwondo for self defense and sometimes I can be found playing soccer or video games.
        </p>
        <p>
          <span>Programming Languages:</span> Python, Ruby, Javascript<br>
          <span>Tech Stacks:</span> Flask, Django, Ruby on Rails, Node/Express, React/Redux, Vuejs/Nuxt.js <br>
          <span>Databases:</span> PostgreSQL, MySQL, MongoDB, Redis <br>
          <span>API Specs:</span> REST, GraphQL <br>
          <span>Infrastructure:</span> AWS, Heroku, Git, Cloudinary <br>
          <span>Continuous Integration:</span> CircleCI, TravisCI, GitlabCI <br>
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
