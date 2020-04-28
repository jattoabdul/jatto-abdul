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
          I am a versatile Senior Software Engineer and a Tech Evangelist. I hold a bachelor of technology's degree in Geology with 6+ years experience building incredible software products and balancing client urgency in conjunction with technological complexity of developing these products for globally distributed teams. designing and developing solutions to solve complex technical problems.
        </p>
        <p>
          I have successfully interacted with diverse programming languages and technologies. At the core is Python, Javascript and Ruby with emphasis on frameworks such as React, Vue.js, Nodejs, Expressjs, Ruby On Rails, Flask and Django. I have built Restful and GraphQL APIs alike. I have also worked with databases such as PostgreSQL, MySQL, MongoDB and Redis for Caching/Job Queues. I have experience using AWS API Gateway, AWS Websocket Gateway, AWS Lambda, Cloudfront.
        </p>
        <p>
          I am enthusiastic about developing practical business solutions using my skill sets. I am constantly in pursuit of knowledge, passionate about a fast-paced, challenging opportunity and agile work environment, not just to push the boundaries of my knowledge and positively impact my growth but to improve the quality of the teams I work with and better the lives of people around me. I am really into developing E-commerce applications and love to learn more about Machine Learning and Artificial Intelligence to help improve the E-commerce space.
        </p>
        <p>
          I enjoy setting up opportunities for learning. Served as mentor/speaker in various Django girls, freecodecamp, teencode and other meetup group events. I also write technical and non-technical articles alike.
        </p>
        <p>
          When I am not writing code or participating in online coding games/algorithm challenges, I can be found playing soccer or video games or practising my cooking skills with my lovely wife.
        </p>
        <p>
          <span>Programming Languages:</span> Python, Ruby, Javascript<br>
          <span>Tech Stacks:</span> Flask, Django, Ruby on Rails, Node/Express, React/Redux, Vuejs/Nuxt.js <br>
          <span>Databases:</span> PostgreSQL, MySQL, MongoDB, Redis <br>
          <span>API Specs:</span> REST, GraphQL <br>
          <span>Infrastructure:</span> AWS, Heroku, Git, Cloudinary <br>
          <span>Continuous Integration:</span> CircleCI, TravisCI, GitlabCI <br>
          <span>Domains:</span> E-commerce, Logistics and Transportation, Education, Loyalty <br>
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
